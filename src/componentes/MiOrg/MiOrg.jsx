// import { useState } from "react";
import "./MiOrg.css";

const MiOrg = (props) => {
    // Estado / Hooks
    // useState() es un hook que permite agregar estado a un componente funcional
    // const [nombreVariable,funcionActualiza] = useState(valorInicial);

    // const [mostrar, actualizarMostrar] = useState(true);

    // const manejarClick = () => {
    //     console.log("Mostrar/Ocultar Elemento",!mostrar);
    //     actualizarMostrar(!mostrar);
    // };

    return <section className="orgSection">
        <h3 className="titulo">Mi organización</h3>
        <img src="add.png" alt="Logo para agregar colaboradores" onClick={props.cambiarMostrar}/>
    </section>
};

export default MiOrg;