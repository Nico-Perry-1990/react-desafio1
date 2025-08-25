import { useState } from "react"

const Registro = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeat, setRepeat] = useState('');
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [exito, setExito] = useState(false);
    const validarDatos = (e) => {
        e.preventDefault();
        if(!email.trim() || !password.trim()  || !repeat.trim()){
            setError(true);
            setErrorMsg("Todos los campos son requeridos");
            setExito(false);
            return;
        }
        if (password !== repeat){
            setError(true)
            setErrorMsg("Las contraseñas no coinciden");
            setExito(false);
            return
        }
        if(password.length<6){
            setError(true);
            setErrorMsg("El Password debe tener al menos 6 digitos");
            setExito(false);
            return;
        }
        setError(false);
        setPassword('');
        setRepeat('');
        setExito(true);
    }

return (
        <>
            <div className="bg-gray-600 flex items-center justify-center p-20">
                <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Registro</h2>
                    <form className="space-y-5" onSubmit={validarDatos}>
                        {error && <p className="text-red-500 text-sm font-medium mt-1">{errorMsg}</p>}
                        {exito && <p className="text-green-500 text-sm font-medium mt-1">¡Registro realizado con éxito!</p>}
                        <div>
                            <label htmlFor="email" class="block text-gray-700 font-medium mb-2">Email</label>
                            <input 
                            type="text"
                            name="email" 
                            placeholder="ejemplo@mail.com" 
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" class="block text-gray-700 font-medium mb-2">Contraseña</label>
                            <input 
                            type="password"
                            name="password" 
                            placeholder="********" 
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            />
                        </div>
                        <div>
                            <label htmlFor="confirm-password" class="block text-gray-700 font-medium mb-2">Repetir Contraseña</label>
                            <input 
                            type="password" 
                            name="repeat" 
                            placeholder="********" 
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                            onChange={(e) => setRepeat(e.target.value)}
                            value={repeat}
                            />
                        </div>
                        <button type="submit" 
                                className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition-colors">
                            Registrarse
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Registro