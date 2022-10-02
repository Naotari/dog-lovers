import React from "react";
import "./Navbar.css"
import {Link} from "react-router-dom"

const Navbar = () => {
    return(
        <div className="navBarMain">
            <Link to="/servicios" className="Link">SERVICIOS</Link>
            <Link to="/colecciones" className="Link">COLECCIONES</Link>
            <Link to="/" className="Title"><h3>DOG LOVERS</h3></Link>
            <Link to="/about" className="Link">SOBRE NOSOTROS</Link>
            <Link to="/contactos" className="Link">CONTACTOS</Link>
        </div>
    )
}

export default Navbar;