import styles from "./../styles/Home.module.css"
import {CalculatorItem} from "./../components/CalculatorItem"

export const Home = () => {
    return (
        <div className={styles.main}>
            <div className={styles.aside}>

            </div>
            <div className={styles.main_panel}>
                <CalculatorItem title="Método EOQ" redirect_url="/metodo-eoq"/>
                <CalculatorItem title="Método Mantenimiento Correctivo" redirect_url="mantenimiento-correctivo"/>

            </div>
        </div>
    )
}
