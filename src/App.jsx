import { useState } from "react";
import "./App.css";
import Header from "./componentes/header/header.jsx";
import Formulario from "./componentes/Formulario/Formulario.jsx";
import MiOrg from "./componentes/MiOrg/MiOrg.jsx";

function App() {
    const [mostrarFormulario, actualizarMostrar] = useState(true);

    const cambiarMostrar = () => {
        actualizarMostrar(!mostrarFormulario);
    };

    return (
        <>
            <Header />
            {/* Aqui utilizamos el operador ternario ---> {mostrarFormulario ? <Formulario /> : <></>} */}
            {/* Aqui utilizamos el corto circuito ---> */ mostrarFormulario && <Formulario />}
            <MiOrg cambiarMostrar={cambiarMostrar}/>
        </>
    );
}

export default App;
