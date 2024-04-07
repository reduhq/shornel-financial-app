import { useState } from "react";


export const MetodoEOQ = () => {
    const [result, setResult] = useState(0)
    const calculateEOQ = (demand: number, orderingCost: number, holdingCost: number)=>{
        return Math.sqrt((2 * demand * orderingCost) / holdingCost);
    }
    const formOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const {demand, orderingCost, holdingCost} = e.target as HTMLFormElement
        const calc = calculateEOQ(demand.value, orderingCost.value, holdingCost.value)
        setResult(calc)

    }

    return (
        <div>
            <form onSubmit={formOnSubmit}>
                <div>
                    <label htmlFor="demand">Demanda</label>
                    <input type="number" name="demand" id="demand"/>
                </div>
                <div>
                    <label htmlFor="orderingCost">Costo de la Orden</label>
                    <input type="number" name="orderingCost" id="orderingCost"/>
                </div>
                <div>
                    <label htmlFor="holdingCost">Costo de Mantenimiento</label>
                    <input type="number" name="holdingCost" id="holdingCost"/>
                </div>
                
                <input type="submit" />
                <p>{result}</p>
            </form>
        </div>
    )
}