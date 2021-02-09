import React from 'react';
import Menu from "./components/menu";
import Produto from "./components/produto";
import AllStar from "./allstarpreto.jpg"

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
            return(              
              <Produto title="João" photo={p.picture}/>
            )
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
      {nome:"AllStar", picture: "img/sapatos/sandalia.jpg", type: "sapato", tamanho: "todos"},
      {nome:"AllStar", picture:"./img/sapatos/AllStar-preto.jpg", sapato:true, pequeno:false, medio:false, grande:false},
      {nome:"AllStar", picture:"./img/sapatos/AllStar-preto.jpg", sapato:true, pequeno:false, medio:false, grande:false},
]}/>

    <Produto title="João" photo={AllStar}/>
    </div>
    </div>

  );
}

export default App;
