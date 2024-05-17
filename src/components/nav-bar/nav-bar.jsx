import './nav-bar.css'
import imgLogo from '../../assets/logo.png'

import CartWidget from '../cart-widget/cart-widget'

const NavBar = () => {
    return(
        <header className="sticky-top">
            <div className="navbar navbar-expand container-fluid headerContainer" id="headerContainer">
                <div className="logoImg">
                    <img className="imgLogo" id="imgLogo" src={imgLogo} alt="Logo"/> {/*IMAGEN CON EL LOGO Y EL NOMBRE DEL ECOMMERCE => GamingGear*/}
                </div>
                <div className="navBarHeader">
                    <nav className="collapse navbar-collapse barraNav" id="barraNav">
                        <ul className="navbar-nav listaHeader" id="listaHeader">
                            <li className="nav-item navegacion">
                                <a className="nav-link itemNav" href="#">Home</a>
                            </li>
                            <li className="nav-item navegacion">
                                <a className="nav-link itemNav" href="#">Ofertas</a>
                            </li>
                            <li className="nav-item navegacion">
                                <a className="nav-link itemNav" href="#">Sign In</a>
                            </li>
                            <li className="nav-item navegacion">
                                <a className="nav-link itemNav" href="#">Log In</a>
                            </li>
                            <li className="nav-item navegacion">
                                <CartWidget /> {/*LLAMAMOS A 'CartWidget*/}
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="searchBarContainer">
                    <form className="d-flex searchBar" id="searchBar" role="search">
                        <input className="form-control me-2 border-0 searchTool" id="searchTool" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn border-0 btnSearchBar" id="btnSearchBar" type="submit"><i className="bi bi-search"></i></button>
                    </form>
                </div>
            </div>
        </header>
    )
}

export default NavBar