import React from "react";
import "./Info2.css"


const Info2 = () => {
    return(
        <div className="Info2_Main">
            <h1>Mi nombre es Frijol</h1>
            <h4>Escaneaste mi codigo para saber la informacion y regresarme con mi dueño</h4>
            <p>Soy asustadizo</p>
            <p>Mi dueño es Luis Rodriguez</p>
            <p>Su numero de telefono es 12134 5678</p>
            <p>Si no responde pudes intentar llanar al 8765 4321</p>
            <div>
                <img src="https://imagenes.20minutos.es/files/image_656_558/uploads/imagenes/2020/03/01/dui.jpeg" alt="dog" height="300px" className="Info2_Img"></img>
            </div>
        </div>
    )
}


export default Info2;