import "./Colaborador.css";

const Colaborador = (props) => {
    const {colorPrimario} = props;
    const { nombre, foto, puesto, equipo } = props.datos;

    const fondo = { background: colorPrimario };

    return <div className="colaborador">
        <div className="encabezado" style={fondo}>
            <img src={foto} alt={nombre}/>
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
        </div>
    </div>
};

export default Colaborador;