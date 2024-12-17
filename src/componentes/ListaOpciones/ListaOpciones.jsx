import "./ListaOpciones.css";

// Metodo Map -> 
// arreglo.map((elemento,indice) => {
//     return <option></option>
// })

const ListaOpciones = (props) => {
    const equipos = [
        "Programación",
        "Front End",
        "Data Science",
        "Devops",
        "UX y Diseño",
        "Móvil",
        "Innovación y  Gestión"
    ];

    const manejarCambio = (e) => {
        console.log("Cambio: ",e.target.value);
        props.actualizarDato(e.target.value);
    };

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar Equipo</option>
            {equipos.map((equipo,index) => <option key={index}>{equipo}</option>)}
        </select>
    </div>
}

export default ListaOpciones;