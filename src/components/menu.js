import burguer from "../img/burguer.png"
import "./css/menu.css"

function Menu(){
    return (
        <header>
      <nav className="menu">
        <p className="logo">JuManoel</p>
        <ul className="items-desktop">
          <a href="#"><li>Laços</li></a>
          <a href="#"><li>Sapatinhos</li></a>
          <a href="#"><li>Paletas</li></a>
        </ul>
      </nav>

      <nav className="menu-mobile">
        <p className="logo">JuManoel</p>
        <input class="menu-btn" type="checkbox" id="menu-btn" />
        <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
        <ul className="items-mobile">
            <a href="#"><li>Laços</li></a>
            <a href="#"><li>Sapatinhos</li></a>
            <a href="#"><li>Paletas</li></a>
        </ul>
      </nav>
    </header>
    )
}

export default Menu;