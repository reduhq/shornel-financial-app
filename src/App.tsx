import { Route, Routes } from "react-router-dom"

import './App.css'
import { Login } from "./pages/Login"
import { Landing } from "./pages/Landing"
import { Home } from "./pages/Home"

function App() {

  return (
    <>
    <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/login" element={<Landing/>} />
        <Route path="/login" element={<Home/>} />
    </Routes>
    </>
  )
}

export default App
