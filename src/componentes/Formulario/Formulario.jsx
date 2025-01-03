import { useState } from "react";
import "./Formulario.css";
import Campo from "../Campo/Campo";
import ListaOpciones from "../ListaOpciones/ListaOpciones";
import Boton from "../Boton/Boton";

const Formulario = (props) => {
    // Hooks de estado para los nuevos colaboradores
    const [nombre,actualizarNombre] = useState("");
    const [puesto,actualizarPuesto] = useState("");
    const [foto,actualizarFoto] = useState("");
    const [equipo,actualizarEquipo] = useState("");

    // Hooks de estado para los nuevos equipos
    const [titulo, actualizarTitulo] = useState("");
    const [color, actualizarColor] = useState("");

    const { registrarColaborador, equipos, crearEquipo } = props;

    const manejarEnvio = (e) => {
        e.preventDefault();
        console.log("Formulario enviado");
        let colaborador = {
            nombre,
            puesto,
            foto,
            equipo
        };
        registrarColaborador(colaborador);
    };

    const manejarEnvioEquipo = (e) => {
        e.preventDefault();
        crearEquipo({titulo, colorPrimario: color});
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo 
                titulo="Nombre" 
                placeholder="Ingresa nombre" 
                required 
                valor={nombre} 
                actualizarDato={actualizarNombre}
            />
            <Campo 
                titulo="Puesto" 
                placeholder="Ingresa puesto" 
                required
                valor={puesto}
                actualizarDato={actualizarPuesto}
            />
            <Campo 
                titulo="Foto" 
                placeholder="Ingresa enlace de foto" 
                required
                valor={foto}
                actualizarDato={actualizarFoto}
            />
            <ListaOpciones 
                valor={equipo}
                actualizarDato={actualizarEquipo}
                equipos={equipos}
            />
            <Boton>
                Crear
            </Boton>
        </form>
        <form onSubmit={manejarEnvioEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <Campo 
                titulo="Titulo" 
                placeholder="Ingresa titulo" 
                required 
                valor={titulo} 
                actualizarDato={actualizarTitulo}
            />
            <Campo 
                titulo="Color" 
                placeholder="Ingresa el color en hexadecimal" 
                required
                valor={color}
                actualizarDato={actualizarColor}
                type="color"
            />
            <Boton>
                Registrar Equipo
            </Boton>
        </form>
    </section>
};

export default Formulario;