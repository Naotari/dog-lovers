import React from "react";
import "./Navbar.css"
import {Link} from "react-router-dom"

const Navbar = () => {
    return(
        <div className="Navbar_Main">
            <Link to="/crearqr" className="Navbar_Link">CREAR QR</Link>
            <Link to="/productos" className="Navbar_Link">PRODUCTOS</Link>
            <Link to="/" className="Navbar_Title"><h3>DOG SECURITY</h3></Link>
            <Link to="/about" className="Navbar_Link">SOBRE NOSOTROS</Link>
            <Link to="/contactos" className="Navbar_Link">CONTACTOS</Link>
        </div>
    )
}

export default Navbar;