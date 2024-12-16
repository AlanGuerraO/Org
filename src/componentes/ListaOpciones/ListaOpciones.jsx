import "./ListaOpciones.css";

// Metodo Map -> 
// arreglo.map((elemento,indice) => {
//     return <option></option>
// })

const ListaOpciones = () => {
    const equipos = [
        "Programación",
        "Front End",
        "Data Science",
        "Devops",
        "UX y Diseño",
        "Móvil",
        "Innovación y  Gestión"
    ];

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select>
            {equipos.map((equipo,index) => <option key={index}>{equipo}</option>)}
        </select>
    </div>
}

export default ListaOpciones;