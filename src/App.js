import './App.css';
import {Route, Link} from "react-router-dom"
import Contactos from "./routes/Contactos"
import Home from "./routes/Home"
import Navbar from "./routes/Navbar"
import About from "./routes/About"
import Productos from "./routes/Productos"
import CrearQr from "./routes/CrearQr"

function App() {
  return (
    <div className="App">
        <Route path='/'>
          <Navbar/>
        </Route>

        <Route exact path='/'>
          <Home/>
        </Route>

        <Route path="/contactos">
          <Contactos/>
        </Route>

        <Route path="/productos">
          <Productos/>
        </Route>
        
        <Route path="/crearqr">
          <CrearQr/>
        </Route>

        <Route path="/about">
          <About/>
        </Route>
    </div>
  );
}

export default App;
