import { useEffect, useState } from "react";
import Card from "../components/Card.jsx";

function Pizza(){
const [pizzas, setPizzas] = useState(null)

async function  getPizzas() {
  const res = await fetch("http://localhost:5000/api/pizzas/p001")
  const data = await res.json()
  setPizzas(data)
}

useEffect(() => {
  getPizzas()
},[])
return (  
    <div className="flex flex-wrap justify-center gap-6 bg-black py-10 min-h-screen">
        {pizzas && (
        <Card 
            key={pizzas.id} 
            img={pizzas.img} 
            name={pizzas.name} 
            ingredients={pizzas.ingredients} 
            price={pizzas.price} 
        />
        )}
    </div>
    );
}

export default Pizza;

