import React from 'react';
import Menu from "./components/menu";
import Produto from "./components/produto";


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

    <ProductList produtos={[
      {nome:"AllStar Preto", picture: "img/sapatos/allstarpreto.jpg", type: "sapato", tamanho: "todos"},
      {nome:"AllStar Vermelho", picture: "img/sapatos/AllStar-vermelho.jpg", type: "sapato", tamanho: "todos"},
      {nome:"Alpargata", picture: "img/sapatos/alpargata.jpg", type: "sapato", tamanho: "todos"},
      {nome:"Chuteirinha Atlético", picture: "img/sapatos/chuteira-atletico.jpg", type: "sapato", tamanho: "todos"},
      {nome:"Chuteirinha Cruzeiro", picture: "img/sapatos/chuteira-cruzeiro.jpg", type: "sapato", tamanho: "todos"},
      {nome:"Botinha de Lã", picture: "img/sapatos/botinha.jpg", type: "sapato", tamanho: "todos"},
      {nome:"Kit Botinha + Touca", picture: "img/sapatos/bota-touca.jpg", type: "sapato", tamanho: "todos"},
      {nome:"New Ballance", picture: "img/sapatos/NewBallance.jpg", type: "sapato", tamanho: "todos"},
      {nome:"Sandalinha", picture: "img/sapatos/sandalia.jpg", type: "sapato", tamanho: "todos"},
      {nome:"Sapato Cachorrinho", picture: "img/sapatos/sapato_cachorrinho.jpg", type: "sapato", tamanho: "todos"},
      
]}/>

    
    </div>
    </div>

  );
}

export default App;
