import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer" style={{ backgroundImage: "url(/Footer.png)" }}>
            <div className="redes-sociales">
                <a href="https://github.com/AlanGuerraO" target="_blank">
                    <img src="/github.png" alt="Github" />
                </a>
                <a href="https://www.linkedin.com/in/alan-guerra-dwf/" target="_blank">
                    <img src="/linkedin.png" alt="Linkedin" />
                </a>
            </div>
            <img src="/Logo.png" alt="Logo de la aplicacion Org." />
            <div className="footer-text">
                <p>Desarrollado por</p>
                <p>Alan Guerra</p>
            </div>
        </footer>
    );
};

export default Footer;