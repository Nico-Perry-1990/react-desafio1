import { useState } from "react";
import { pizzaCart } from "../assets/data/pizzas.js";

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const updateCount = (id, delta) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, count: Math.max(item.count + delta, 0) } 
          : item
      )
    );
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.count, 0);

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
        <button className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800">
          Pagar
        </button>
      </div>
    </div>
  );
};

export default Cart;