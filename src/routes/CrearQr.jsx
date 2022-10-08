import React from "react";
import "./CrearQr.css"

const CrearQr = () => {
    return(
        <div className="CrearQrMain">
            <h1>Crear QR</h1>
            <p>Llena este formulario para crear tu codigo QR y adjuntarlo con tu compra(collar o arnes).</p>
            <form>
                <ul>
                    <li>
                        <h4>Datos personales</h4>
                    </li>
                    <li>
                        <label for="name">Nombre:</label>
                        <input type="text" id="name" name="user_name" />
                    </li>
                    <li>
                        <label for="phone">Telefono:</label>
                        <input type="number" id="phone" name="user_phone" />
                    </li>
                    <li>
                        <label for="phone_aux">Telefono alternativo:</label>
                        <input type="number" id="phone_aux" name="user_phone_aux" />
                    </li>
                    <li>
                        <label for="email">Correo:</label>
                        <input type="email" id="email" name="user_email" />
                    </li>
                    <li>
                    <h4>Datos de tu mascota</h4>
                    </li>
                    <li>
                        <label for="pet_name">Nombre:</label>
                        <input type="text" id="pet_name" name="pet_name" />
                    </li>
                    <li>
                        <label for="size">Talla:</label>
                        <input type="text" id="size" name="size" />
                    </li>
                    <li>
                        <label for="code">Codigo:</label>
                        <input type="text" id="code" name="code" />
                    </li>
                    <li>
                        <label for="race">Raza:</label>
                        <input type="text" id="race" name="race" />
                    </li>
                    <li>
                        <label for="temp">Temperamento:</label>
                        <input type="text" id="temp" name="temp" />
                    </li>
                    <li>
                        <p>Sexo:</p>
                        <label for="macho">Macho</label>
                        <input type="radio" id="macho" name="sexo" value="SEXO"></input>
                        <label for="hembra">Hembra</label>
                        <input type="radio" id="hembra" name="sexo" value="SEXO"></input>
                    </li>
                </ul>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default CrearQr;