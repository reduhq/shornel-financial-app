import { Route, Routes } from "react-router-dom"

import './App.css'
import { Login } from "./pages/Login"
import { Landing } from "./pages/Landing"
import { Home } from "./pages/Home"
import { Register } from "./pages/Register"
import { MetodoEOQ } from "./pages/calculators/MetodoEOQ"
import { MetodoMantenimientoCorrectivo } from "./pages/calculators/MetodoMantenimientoCorrectivo"

function App() {

  return (
    <>
    <Routes>
        <Route path="/iniciar-sesion" element={<Login/>} />
        <Route path="/registrarse" element={<Register/>} />
        <Route path="/" element={<Landing/>} />
        <Route path="/home" element={<Home/>} />
        {/* Calculators */}
        <Route path="/metodo-eoq" element={<MetodoEOQ/>} />
        <Route path="/mantenimiento-correctivo" element={<MetodoMantenimientoCorrectivo/>} />
    </Routes>
    </>
  )
}

export default App
