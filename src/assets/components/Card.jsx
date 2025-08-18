function Card ({img, name, ingredients, price}) {
  const formatPrice = (amount) => amount.toLocaleString("es-CL", {
    style: "currency",
    currency: "CLP",
    minimumFractionDigits: 0
    });

  return (
    <div className="bg-gray-100 m-3 rounded-lg overflow-hidden shadow-md transform transition duration-300 hover:scale-105 w-72">
      {/* Imagen */}
      <img
        src={img}
        alt={name}
        className="w-full h-48 object-cover"
      />

      {/* Contenido de la carta */}
      <div className="p-4 flex flex-col gap-3">
        {/* Nombre */}
        <h2 className="text-xl font-semibold">{name}</h2>
        <hr className="border-dashed border-gray-300" />

        {/* Ingredientes */}
        <h5 className="flex bold">🍕 Ingredientes:</h5>
        <p className="text-gray-700 text-sm justify-center">{ingredients.join(", ")}</p>
        <hr className="border-dashed border-gray-300" />

        {/* Precio */}
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