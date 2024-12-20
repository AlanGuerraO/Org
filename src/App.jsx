import { useState } from "react";
import "./App.css";
import Header from "./componentes/header/header.jsx";
import Formulario from "./componentes/Formulario/Formulario.jsx";
import MiOrg from "./componentes/MiOrg/MiOrg.jsx";
import Equipo from "./componentes/Equipo/Equipo.jsx";
import Footer from "./componentes/Footer/Footer.jsx";

function App() {
    // Operador ternario --> condicion ? SeMuestra : NoSeMuestra
    // Corto circuito --> condicion && SeMuestra

    const [mostrarFormulario, actualizarMostrar] = useState(false);
    const [colaboradores, actualizarColaboradores] = useState([]);

    const cambiarMostrar = () => {
        actualizarMostrar(!mostrarFormulario);
    };

    // Registrar colaborador
    const registrarColaborador = (colaborador) => {
        console.log("Colaborador agregado",colaborador);
        // Spread operator
        actualizarColaboradores([...colaboradores,colaborador]);
    };

    const EQUIPOS = [
        {
            titulo: "Programación",
            colorPrimario: "#57C278 ",
            colorSecundario: "#D9F7E9"
        },
        {
            titulo: "Front End",
            colorPrimario: "#82CFFA",
            colorSecundario: "#E8F8FF"
        },
        {
            titulo: "Data Science",
            colorPrimario: "#A6D157",
            colorSecundario: "#F0F8E2"
        },
        {
            titulo: "Devops",
            colorPrimario: "#E06B69",
            colorSecundario: "#FDE7E8"
        },
        {
            titulo: "UX y Diseño",
            colorPrimario: "#DB6EBF",
            colorSecundario: "#FAE9F5"
        },
        {
            titulo: "Móvil",
            colorPrimario: "#FFBA05",
            colorSecundario: "#FFF5D9"
        },
        {
            titulo: "Innovación y  Gestión",
            colorPrimario: "#FF8A29",
            colorSecundario: "#FFEEDF"
        },
    ];

    return (
        <>
            <Header />
            {/*{mostrarFormulario ? <Formulario /> : <></>} */}
            {
                mostrarFormulario && <Formulario 
                    equipos={EQUIPOS.map((equipo) => equipo.titulo)}
                    registrarColaborador = {registrarColaborador}
                />
            }
            <MiOrg cambiarMostrar={cambiarMostrar} />
            {EQUIPOS.map( (equipo) => 
                <Equipo datos={equipo} 
                    key={equipo.titulo}
                    colaborador={colaboradores.filter((colaborador) => colaborador.equipo === equipo.titulo)}
                /> 
            )}
            <Footer />
        </>
    );
}

export default App;
