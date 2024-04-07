
export const Register = () => {
    return (
        <div className="container">
            <h1>Registrate</h1>
            <form action="">
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" id='username' name='username' placeholder='Tu username'/>
                </div>
                <div>
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" id='password' name='password' placeholder='Tu contraseña'/>
                </div>
                <input type="submit" value='Crear Cuenta'/>
            </form>
        </div>
    )
}
