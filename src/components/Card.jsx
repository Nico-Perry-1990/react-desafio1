function Card ({img, name, ingredients, price}) {
  const formatPrice = (amount) => amount.toLocaleString("es-CL", {
    style: "currency",
    currency: "CLP",
    minimumFractionDigits: 0
    });

  return (
    <div className="bg-gray-100 m-3 rounded-lg overflow-hidden shadow-md transform transition duration-300 hover:scale-105 hover:shadow-white w-72 h-[550px]">
      {/* Imagen */}
      <img
        src={img}
        alt={name}
        className="w-full h-48 object-cover"
      />

      {/* Contenido de la carta */}
      <div className="p-4 flex flex-col gap-3">
        {/* Nombre */}
        <h2 className="text-xl font-semibold ">{name}</h2>
        <hr className="border-dashed border-gray-300" />

        {/* Ingredientes */}
        <h5 className="font-bold">🍕 Ingredientes:</h5>
        <ul
          className={`text-gray-700 text-sm list-none pl-1 text-left space-y-1 ${
            ingredients.length >= 2 ? "grid grid-cols-2 gap-x-4 gap-y-1" : ""
          }`}
        >
          {ingredients.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <span>✔️</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <hr className="border-dashed border-gray-300" />

        {/* Precio */}
        <h1 className="flex justify-center uppercase">Precio</h1>
        <p className="flex text-lg font-bold justify-center text-gray-800">
          {formatPrice(price)}
        </p>
        <hr className="border-dashed border-gray-300" />

        {/* Botones */}
        <div className="flex justify-between mt-2">
          <button className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-800 transition">
            Ver más
          </button>
          <button className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-800 transition">
            Añadir
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;