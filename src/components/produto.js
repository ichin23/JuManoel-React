import "./css/produto.css"

function Produto(props){
    return (
        <div className="produto">
            <img src={props.photo} width="50px" className="foto"></img>
            <div>
                <p className="title">{props.title}</p>
                <p className="color">{props.color}</p>
            </div>
        </div>
    )

}

export default Produto;