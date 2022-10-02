import React from "react";
import "./Home.css"
import {Link} from "react-router-dom"

const Home = () => {
    return(
        <div className="Home">
            <h1>Brindando la seguridad para tú mascota</h1>
            <p>porque todos merecemos cosas únicas</p>
            <Link to="/contactos" className="Cont">Contactar</Link>
        </div>
    )
}

export default Home;