import React from 'react';
import Menu from "./components/menu";
import Produto from "./components/produto";
import produtos from "./utils/produtos.js";


import './App.css';

class ProductList extends React.Component{
  constructor(props){
    super(props);

    this.state={produtos: this.props.produtos};
  }

  render(){
    return(
      <div className="grid-container">
        {
          this.state.produtos.map(p => {
            if(p.type=="sapato"){
            return(              
              <Produto title={p.nome} photo={p.picture}/>
            )}
          })
        }
      </div>
    )
  }
}


function App() {
  return (
    <div>
    <Menu />
    <div className="vitrine">

    <ProductList produtos={produtos}/>

    
    </div>
    </div>

  );
}

export default App;
