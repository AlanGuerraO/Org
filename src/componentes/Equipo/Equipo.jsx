import "./Equipo.css";
import Colaborador from "../Colaborador/Colaborador";
import hexToRgba from "hex-to-rgba";

const Equipo = (props) => {
    // Destructuracion de objetos
    // En lugar de hacer const titulo = props.datos.titulo, por cada propiedad, se hace lo siguiente:
    const { titulo, colorPrimario, colorSecundario } = props.datos;
    const {colaborador, eliminarColaborador, actualizarColor} = props;

    const fondo = { backgroundColor: hexToRgba(colorPrimario, 0.5)};
    const estiloTitulo = { borderColor: colorPrimario };

    return <>
        {
            colaborador.length > 0 && 
            <section className="equipo" style={fondo}>
                <input
                    type="color" 
                    className="input-color"
                    value={colorPrimario}
                    onChange={(e) => actualizarColor(e.target.value, titulo)}
                />
                <h3 style={estiloTitulo}>{titulo}</h3>
                <div className="colaboradores">
                    {colaborador.map((colaborador, index) => 
                        <Colaborador 
                            key={index} 
                            datos={colaborador} 
                            colorPrimario={colorPrimario}
                            eliminarColaborador={eliminarColaborador}   
                        />
                    )}
                </div>
            </section>
        }
    </>
};

export default Equipo;