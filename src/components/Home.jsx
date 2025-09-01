import Card from "./Card.jsx";
// import data from "../assets/data/data.js";
import {pizzas} from "../assets/data/pizzas.js"

function Home() {
  return (
    <div className="flex flex-wrap justify-center gap-6 bg-black py-10 min-h-screen">
      {pizzas.map(e => (
        <Card 
          key={e.id} 
          img={e.img} 
          name={e.name} 
          ingredients={e.ingredients} 
          price={e.price} 
        />
      ))}
    </div>
  );
}

export default Home;