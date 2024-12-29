import { useState } from "react";
import { v4 as uuid } from "uuid"; 
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
        id: uuid(),
        equipo: "Front End",
        foto: "https://github.com/harlandlohora.png",
        nombre: "Harland Lohora",
        puesto: "Instructor"
      },
      {
        id: uuid(),
        equipo: "Programación",
        foto: "https://github.com/alanguerrao.png",
        nombre: "Alan Guerra",
        puesto: "Desarrollador de software"
      },
      {
        id: uuid(),
        equipo: "UX y Diseño",
        foto: "https://github.com/JeanmarieAluraLatam.png",
        nombre: "Jeanmarie Quijada",
        puesto: "Instructora en Alura Latam"
      },
      {
        id: uuid(),
        equipo: "Programación",
        foto: "https://github.com/christianpva.png",
        nombre: "Christian Velasco",
        puesto: "Head de Alura e Instructor"
      },
      {
        id: uuid(),
        equipo: "Innovación y  Gestión",
        foto: "https://github.com/JoseDarioGonzalezCha.png",
        nombre: "Jose Gonzalez",
        puesto: "Dev FullStack"
    }]);
    const [EQUIPOS, actualizarEquipos] = useState([
        {
            id: uuid(),
            titulo: "Programación",
            colorPrimario: "#57C278",
            colorSecundario: "#D9F7E9"
        },
        {
            id: uuid(),
            titulo: "Front End",
            colorPrimario: "#82CFFA",
            colorSecundario: "#E8F8FF"
        },
        {
            id: uuid(),
            titulo: "Data Science",
            colorPrimario: "#A6D157",
            colorSecundario: "#F0F8E2"
        },
        {
            id: uuid(),
            titulo: "Devops",
            colorPrimario: "#E06B69",
            colorSecundario: "#FDE7E8"
        },
        {
            id: uuid(),
            titulo: "UX y Diseño",
            colorPrimario: "#DB6EBF",
            colorSecundario: "#FAE9F5"
        },
        {
            id: uuid(),
            titulo: "Móvil",
            colorPrimario: "#FFBA05",
            colorSecundario: "#FFF5D9"
        },
        {
            id: uuid(),
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
    const eliminarColaborador = (id) => {
        console.log("Colaborador eliminado", id);
        const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id);
        actualizarColaboradores(nuevosColaboradores);
    };

    // Actualizar el color de fondo de un equipo
    const actualizarColor = (color, id) => {
        const equiposActualizados = EQUIPOS.map((equipo) => {
            if (equipo.id === id) {
                equipo.colorPrimario = color;
            }
            return equipo;
        });
        actualizarEquipos(equiposActualizados);
    };

    // Crear un nuevo equipo
    const crearEquipo = (nuevoEquipo) => {
        console.log("Equipo creado", nuevoEquipo);
        actualizarEquipos([...EQUIPOS, {...nuevoEquipo, id: uuid()}]);
    };

    return (
        <>
            <Header />
            {/*{mostrarFormulario ? <Formulario /> : <></>} */}
            {
                mostrarFormulario && <Formulario 
                    equipos={EQUIPOS.map((equipo) => equipo.titulo)}
                    registrarColaborador = {registrarColaborador}
                    crearEquipo = {crearEquipo}
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
