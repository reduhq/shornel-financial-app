import { useState } from "react"


export const MetodoMantenimientoCorrectivo = () => {
    const [result, setResult] = useState(0)

    const calculateMantenimientoCorrectivo = (
        h: number,
        mtf: number, 
        // numeroFallas: number, 
        horasDeTrabajo: number, 
        costoTrabajoXHora: number, 
        Rpuesto: number, 
        CostoTareasOperacionales: number, 
        Retraso: number, 
        cup: number, 
        cfu: number
    ) =>{
        const numeroFallas = h/mtf
        return Math.round(numeroFallas)*((horasDeTrabajo*costoTrabajoXHora+Rpuesto+CostoTareasOperacionales+Retraso)+ (horasDeTrabajo*cup+cfu))
    }

    const formOnSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        const{
            h, 
            mtf,
            horasDeTrabajo,
            costoTrabajoXHora, 
            Rpuesto, 
            CostoTareasOperacionales, 
            Retraso, 
            cup, 
            cfu
        } = e.target as HTMLFormElement
        const calc = calculateMantenimientoCorrectivo(
            parseFloat(h.value), 
            parseFloat(mtf.value),
            parseFloat(horasDeTrabajo.value),
            parseFloat(costoTrabajoXHora.value), 
            parseFloat(Rpuesto.value), 
            parseFloat(CostoTareasOperacionales.value), 
            parseFloat(Retraso.value), 
            parseFloat(cup.value), 
            parseFloat(cfu.value)
        )
        setResult(calc)
    }

    return (
        <div>
            <form onSubmit={formOnSubmit}>
                <div>
                    <label htmlFor="h">h</label>
                    <input type="number" id="h" name="h" />
                </div>
                <div>
                    <label htmlFor="mtf">mtf</label>
                    <input type="number" id="mtf" name="mtf" step="0.0001"/>
                </div>
                <div>
                    <label htmlFor="horasDeTrabajo">horasDeTrabajo</label>
                    <input type="number" id="horasDeTrabajo" name="horasDeTrabajo" />
                </div>
                <div>
                    <label htmlFor="costoTrabajoXHora">costoTrabajoXHora</label>
                    <input type="number" id="costoTrabajoXHora" name="costoTrabajoXHora" />
                </div>
                <div>
                    <label htmlFor="Rpuesto">Rpuesto</label>
                    <input type="number" id="Rpuesto" name="Rpuesto" />
                </div>
                <div>
                    <label htmlFor="CostoTareasOperacionales">CostoTareasOperacionales</label>
                    <input type="number" id="CostoTareasOperacionales" name="CostoTareasOperacionales" />
                </div>
                <div>
                    <label htmlFor="Retraso">Retraso</label>
                    <input type="number" id="Retraso" name="Retraso" />
                </div>
                <div>
                    <label htmlFor="cup">cup</label>
                    <input type="number" id="cup" name="cup" />
                </div>
                <div>
                    <label htmlFor="cfu">cfu</label>
                    <input type="number" id="cfu" name="cfu" />
                </div>
                <input type="submit" />
                <p>{result}</p>

            </form>
        </div>
    )
}
