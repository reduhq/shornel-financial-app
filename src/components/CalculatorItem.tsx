import styles from "./../styles/CalculatorItem.module.css"
import {Link} from "react-router-dom"

interface Props{
    title:string,
    redirect_url:string
}

export const CalculatorItem = ({title, redirect_url}:Props) => {
    return (
        <div>
            <Link to={redirect_url} className={styles.card}>
                <h2>{title}</h2>
            </Link>
        </div>
    )
}