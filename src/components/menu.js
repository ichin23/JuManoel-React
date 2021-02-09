import React, { Component } from 'react'
import "./css/menu.css"
import Produto from "./produto";
import produtos from "../utils/produtos.js";

class Menu extends Component{

  constructor(props) {
    super(props);
    this.state={
      contador:1,
      
    }
  }


  render(){
    return (
      <div>
        <header>
      <nav className="menu">
        <p className="logo">JuManoel</p>
        
        <ul className="items-desktop">
          <li onClick={()=> {
            let state= this.state;
            state.contador=1;
            this.setState(state);
            console.log(state.contador)
          }}>Sapatinhos</li>

          <li onClick={()=> {
            let state= this.state;
            state.contador=2;
            this.setState(state);
            console.log(state.contador)
          }}>Laços</li>

          <li onClick={()=> {
            let state= this.state;
            state.contador=3;
            this.setState(state);
            console.log(state.contador)
          }}>Paletas</li>
        </ul>
      </nav>

      <nav className="menu-mobile">
        <p className="logo">JuManoel</p>
        <input class="menu-btn" type="checkbox" id="menu-btn" />
        <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
        <ul className="items-mobile">
            <li onClick={()=> {
              let state= this.state;
              state.contador=1;
              this.setState(state);
              console.log(state.contador)
            }}>Sapatinhos</li>
            <li onClick={()=> {
            let state= this.state;
            state.contador=2;
            this.setState(state);
            console.log(state.contador)
          }}>Laços</li>
            <li onClick={()=> {
            let state= this.state;
            state.contador=3;
            this.setState(state);
            console.log(state.contador)
          }}>Paletas</li>
        </ul>
      </nav>
    </header>
    <div className="vitrine">
    <div className="grid-container">
        {
          produtos.map(p=>{
            if(this.state.contador==1){
              if(p.type=="sapato"){
            return(
              
              <Produto title={p.nome} photo={p.picture}/>
              )}}
              if(this.state.contador==2){
                if(p.type=="laco"){
              return(
                
                <Produto title={p.nome} photo={p.picture}/>
                )}}
          })
        }
      </div>
    </div>
    </div>
    

    )}
}

export default Menu;
