import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

const Registro = () => {
  const { register, error } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeat, setRepeat] = useState("");
  const [exito, setExito] = useState(false);
  const navigate = useNavigate();

  const validarDatos = async (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim() || !repeat.trim())
      return alert("Todos los campos son requeridos");
    if (password !== repeat) return alert("Las contraseñas no coinciden");

    const success = await register(email, password);
    if (success) {
      setExito(true);
      navigate("/profile");
    }
  };

  return (
    <div className="bg-gray-600 flex items-center justify-center p-20">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Registro</h2>
        <form className="space-y-5" onSubmit={validarDatos}>
          {error && <p className="text-red-500">{error}</p>}
          {exito && <p className="text-green-500">¡Registro realizado con éxito!</p>}
          <input
            type="email"
            placeholder="ejemplo@mail.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="password"
            placeholder="********"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <input
            type="password"
            placeholder="Repetir contraseña"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            onChange={(e) => setRepeat(e.target.value)}
            value={repeat}
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registro;