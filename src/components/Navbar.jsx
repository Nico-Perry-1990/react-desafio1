import { Link } from "react-router-dom";

function Navbar () {
  const total = 25000;
  const token = false;

  const formatPrice = (amount) => amount.toLocaleString("es-CL", {
    style: "currency",
    currency: "CLP",
    minimumFractionDigits: 0
  });

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-800 shadow-md">
      <Link to="/" className="relative group text-gray-200 border border-gray-600 px-4 py-2 rounded-md bg-transparent transition">
        🍕 Home
        <span className="absolute left-0 -bottom-1 w-0 h-1 bg-gray-100 transition-all duration-300 group-hover:w-full"></span>
      </Link>

      <div className="flex gap-4 items-center">
        {(token ? [
          { label: "🔓 Profile", path: "/profile" },
          { label: "🔒 Logout", path: "/logout" }
        ] : [
          { label: "🔐 Login", path: "/login" },
          { label: "🔐 Register", path: "/registro" }
        ]).map(({label, path}) => (
          <Link
            key={label}
            to={path}
            className="relative group text-gray-200 border border-gray-600 px-4 py-2 rounded-md bg-transparent transition"
          >
            {label}
            <span className="absolute left-0 -bottom-1 w-0 h-1 bg-gray-100 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}

        <div className="relative group text-gray-200 border border-gray-600 px-4 py-2 rounded-md bg-transparent transition">
          🛒 Total: {formatPrice(total)}
          <span className="absolute left-0 -bottom-1 w-0 h-1 bg-gray-100 transition-all duration-300 group-hover:w-full"></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;