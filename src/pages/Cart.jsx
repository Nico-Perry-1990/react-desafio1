import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";

const Cart = () => {
  const { cart, updateCount, total } = useCart();
  const { token } = useUser();

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto max-h-screen flex flex-col">
      <h2 className="text-lg font-semibold mb-4">Detalles del pedido:</h2>
      <div className="space-y-3 flex-grow overflow-y-auto">
        {cart.map((pizza) => (
          <div
            key={pizza.id}
            className="flex items-center justify-between border-b pb-2"
          >
            <div className="flex items-center gap-3">
              <img
                src={pizza.img}
                alt={pizza.name}
                className="w-12 h-12 rounded-md object-cover"
              />
              <span className="font-medium capitalize">{pizza.name}</span>
            </div>

            <span className="font-medium">
              ${(pizza.price * pizza.count).toLocaleString("es-CL")}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => updateCount(pizza.id, -1)}
                className="border border-red-400 text-red-500 px-2 rounded"
              >
                -
              </button>
              <span>{pizza.count}</span>
              <button
                onClick={() => updateCount(pizza.id, +1)}
                className="border border-blue-400 text-blue-500 px-2 rounded"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold">
            Total: ${total.toLocaleString("es-CL")}
          </span>
        </div>
        <button
          disabled={!token}
          className={`mt-4 w-full py-2 rounded-lg transition ${
            token
              ? "bg-black text-white hover:bg-gray-800"
              : "bg-gray-400 text-gray-700 cursor-not-allowed"
          }`}
        >
          Pagar
        </button>
      </div>
    </div>
  );
};

export default Cart;