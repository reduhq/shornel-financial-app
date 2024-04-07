import { Link } from "react-router-dom"
import styles from "./../styles/Landing.module.css"

export const Landing = () => {
    return (
        <div>
            <nav className={styles.navbar}>
                <div className="container">
                    <Link to={"#"}>Soluciones</Link>
                    <Link to={"iniciar-sesion"}>Iniciar Sesión</Link>
                    <Link to={"/registrarse"} className={styles.register}>Registrate</Link>
                </div>
            </nav>

            <div className="container">
                <div className={styles.panel_landing}>
                    <div className={styles.first}>
                        <h1>
                            El Nuevo estándar en análisis de inventario
                        </h1>
                        <h2>Bienvenido a la calculadora de inventario que simplificará tu gestión de stock!</h2>

                        <Link to={"#"}>Más información</Link>
                    </div>
                    <div className={styles.second}>
                        <img src="/calculator.svg" alt="calculator" />
                    </div>
                </div>
            </div>
        </div>
    )
}
