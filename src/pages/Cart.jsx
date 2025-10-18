import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";
import { useState } from "react";
import { CartProvider } from "../context/CartContext";

const Cart = () => {
  const { cart, updateCount, total } = useCart();
  const { token } = useUser();
  const [mensaje, setMensaje] = useState("");

  const handleCheckout = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/checkouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ cart }),
      });

      if (!res.ok) {
        throw new Error("Error al procesar la compra");
      }

      setMensaje("✅ Compra realizada con éxito");
    } catch (error) {
      console.error(error);
      setMensaje("❌ No se pudo completar la compra");
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-lg font-semibold mb-4">Detalles del pedido:</h2>

      {cart.map((pizza) => (
        <div key={pizza.id} className="flex justify-between items-center mb-2">
          <span>{pizza.name}</span>
          <span>${(pizza.price * pizza.count).toLocaleString("es-CL")}</span>
        </div>
      ))}

      <div className="mt-4">
        <p className="font-bold text-lg">Total: ${total.toLocaleString("es-CL")}</p>

        <button
          disabled={!token}
          onClick={handleCheckout}
          className={`mt-4 w-full py-2 rounded-lg transition ${
            token
              ? "bg-black text-white hover:bg-gray-800"
              : "bg-gray-400 text-gray-700 cursor-not-allowed"
          }`}
        >
          Pagar
        </button>

        {mensaje && <p className="mt-3 text-center">{mensaje}</p>}
      </div>
    </div>
  );
};

export default Cart;