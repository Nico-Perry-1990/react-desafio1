import { useNavigate } from "react-router-dom";

function Profile() {
  const userEmail = "usuario@correo.com"; 
  const navigate = useNavigate();

  const handleLogout = () => {
    alert("Sesión cerrada (función aún no implementada)");
    navigate("/login"); 
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center p-6">
      <h1 className="text-3xl font-bold mb-4">👤 Perfil de Usuario</h1>
      <p className="text-lg mb-6">Email: {userEmail}</p>
      <button
        onClick={handleLogout}
        className="px-6 py-3 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition"
      >
        Cerrar sesión
      </button>
    </div>
  );
}

export default Profile;