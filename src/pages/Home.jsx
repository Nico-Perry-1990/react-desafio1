import Card from "../components/Card.jsx";
// import data from "../assets/data/data.js";
import usePizzas from "../assets/data/pizzas.js";

function Home() {
  const pizzas = usePizzas();
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