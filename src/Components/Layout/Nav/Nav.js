import {Link} from "react-router-dom";

const Nav = () => (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <Link to="/home" className="nav-link text-dark">Acceuil</Link>
                    <Link to="/Protfolio" className="nav-link text-dark">PortFolio</Link>
                    <Link to="/Contact" className="nav-link text-dark">Contact</Link>
                </div>
            </div>
        </div>
    </nav>
)

export default Nav;