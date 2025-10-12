import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card.jsx";

function Pizza() {
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);

  async function getPizza() {
    const res = await fetch(`http://localhost:5000/api/pizzas/${id}`);
    const data = await res.json();
    setPizza(data);
  }

  useEffect(() => {
    getPizza();
  }, [id]);

  if (!pizza) return <p className="text-center text-white">Cargando...</p>;

  return (
    <div className="flex justify-center bg-black py-10 min-h-screen">
      <Card
        key={pizza.id}
        id={pizza.id}
        img={pizza.img}
        name={pizza.name}
        ingredients={pizza.ingredients}
        price={pizza.price}
      />
    </div>
  );
}

export default Pizza;

