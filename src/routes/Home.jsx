import React from "react";
import "./Home.css"
import {Link} from "react-router-dom"

const Home = () => {
    return(
        <div className="Home">
            <h1 className="Home_Title">Brindando la seguridad para tú mascota</h1>
            <p className="Home_Paragraph">porque todos merecemos cosas únicas</p>
            <Link to="/crearqr" className="Home_Link">Generar QR</Link>
        </div>
    )
}

export default Home;