import './App.css';
import {Route} from "react-router-dom"
import Contactos from "./routes/Contactos"
import Home from "./routes/Home"
import Navbar from "./routes/Navbar"
import About from "./routes/About"
import Productos from "./routes/Productos"
import CrearQr from "./routes/CrearQr"
import Info1 from "./routes/Info1"
import Info2 from "./routes/Info2"
import Info3 from "./routes/Info3"
import Info4 from "./routes/Info4"

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

        <Route path="/perro1">
          <Info1/>
        </Route>
        
        <Route path="/perro2">
          <Info2/>
        </Route>
        
        <Route path="/perro3">
          <Info3/>
        </Route>
        
        <Route path="/perro4">
          <Info4/>
        </Route>
    </div>
  );
}

export default App;
