import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";

function Navbar() {
  const { total } = useCart();
  const { token, logout } = useUser();

  const formatPrice = (amount) =>
    amount.toLocaleString("es-CL", {
      style: "currency",
      currency: "CLP",
      minimumFractionDigits: 0,
    });

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-800 shadow-md">
      <Link
        to="/"
        className="relative group text-gray-200 border border-gray-600 px-4 py-2 rounded-md bg-transparent transition"
      >
        🍕 Home
        <span className="absolute left-0 -bottom-1 w-0 h-1 bg-gray-100 transition-all duration-300 group-hover:w-full"></span>
      </Link>

      <div className="flex gap-4 items-center">
        {token ? (
          <>
            <Link
              to="/profile"
              className="relative group text-gray-200 border border-gray-600 px-4 py-2 rounded-md bg-transparent transition"
            >
              🔓 Profile
            </Link>
            <button
              onClick={logout}
              className="relative group text-gray-200 border border-gray-600 px-4 py-2 rounded-md bg-transparent transition"
            >
              🔒 Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="relative group text-gray-200 border border-gray-600 px-4 py-2 rounded-md bg-transparent transition"
            >
              🔐 Login
            </Link>
            <Link
              to="/registro"
              className="relative group text-gray-200 border border-gray-600 px-4 py-2 rounded-md bg-transparent transition"
            >
              🔐 Register
            </Link>
          </>
        )}

        <Link
          to="/cart"
          className="relative group text-gray-200 border border-gray-600 px-4 py-2 rounded-md bg-transparent transition"
        >
          🛒 Total: {formatPrice(total)}
          <span className="absolute left-0 -bottom-1 w-0 h-1 bg-gray-100 transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;