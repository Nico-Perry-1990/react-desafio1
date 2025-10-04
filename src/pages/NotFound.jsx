import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center p-6">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <p className="text-lg text-gray-600 mb-6">
        ¡Oops! La página que buscas no existe.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        🔙 Volver al inicio
      </Link>
    </div>
  );
}

export default NotFound;
