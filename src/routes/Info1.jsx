import React from "react";
import "./Info1.css"


const Info1 = () => {
    return(
        <div className="Info1_Main">
            <h1>Mi nombre es Salchica</h1>
            <h4>Escaneaste mi codigo para saber la informacion y regresarme con mi dueño</h4>
            <p>Soy amistoso</p>
            <p>Mi dueño es Martin De Leon</p>
            <p>Su numero de telefono es 12134 5678</p>
            <p>Si no responde pudes intentar llanar al 8765 4321</p>
            <div>
                <img src="https://www.animalfiel.com/wp-content/uploads/2020/10/tipos-de-perro-salchicha.jpg" alt="dog" height="300px" className="Info1_Img"></img>
            </div>
        </div>
    )
}


export default Info1;