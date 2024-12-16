import "./Formulario.css";
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaOpciones from "../ListaOpciones/ListaOpciones";
import Boton from "../Boton/Boton";

const Formulario = () => {
    const manejarEnvio = (e) => {
        e.preventDefault();
        console.log("Formulario enviado",e);
    };

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto titulo="Nombre" placeholder="Ingresa nombre" required/>
            <CampoTexto titulo="Puesto" placeholder="Ingresa puesto" required/>
            <CampoTexto titulo="Foto" placeholder="Ingresa enlace de foto" required/>
            <ListaOpciones />
            <Boton>
                Crear
            </Boton>
        </form>
    </section>
};

export default Formulario;