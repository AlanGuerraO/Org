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
    const [colaboradores, actualizarColaboradores] = useState([{
        equipo: "Front End",
        foto: "https://github.com/harlandlohora.png",
        nombre: "Harland Lohora",
        puesto: "Instructor"
      },
      {
        equipo: "Programación",
        foto: "https://github.com/alanguerrao.png",
        nombre: "Alan Guerra",
        puesto: "Desarrollador de software"
      },
      {
        equipo: "UX y Diseño",
        foto: "https://github.com/JeanmarieAluraLatam.png",
        nombre: "Jeanmarie Quijada",
        puesto: "Instructora en Alura Latam"
      },
      {
        equipo: "Programación",
        foto: "https://github.com/christianpva.png",
        nombre: "Christian Velasco",
        puesto: "Head de Alura e Instructor"
      },
      {
        equipo: "Innovación y  Gestión",
        foto: "https://github.com/JoseDarioGonzalezCha.png",
        nombre: "Jose Gonzalez",
        puesto: "Dev FullStack"
    }]);
    const [EQUIPOS, actualizarEquipos] = useState([
        {
            titulo: "Programación",
            colorPrimario: "#57C278",
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
    ]);

    const cambiarMostrar = () => {
        actualizarMostrar(!mostrarFormulario);
    };

    // Registrar colaborador
    const registrarColaborador = (colaborador) => {
        console.log("Colaborador agregado",colaborador);
        // Spread operator
        actualizarColaboradores([...colaboradores,colaborador]);
    };

    // Eliminar Colaborador
    const eliminarColaborador = () => {
        console.log("Colaborador eliminado");
    };

    // Actualizar el color de fondo de un equipo
    const actualizarColor = (color,titulo) => {
        const equiposActualizados = EQUIPOS.map((equipo) => {
            if (equipo.titulo === titulo) {
                equipo.colorPrimario = color;
            }
            return equipo;
        });
        actualizarEquipos(equiposActualizados);
    };

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
                    eliminarColaborador={eliminarColaborador}
                    actualizarColor={actualizarColor}
                /> 
            )}
            <Footer />
        </>
    );
}

export default App;
