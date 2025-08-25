import Card from "./Card.jsx";
import data from "../assets/data/data.js";

function Home() {
  return (
    <div className="flex flex-wrap justify-center gap-6 bg-gray-600 py-10 h-150">
      {data.map(e => (
        <Card 
          key={e.id} 
          img={e.img.src} 
          name={e.name} 
          ingredients={e.ingredients} 
          price={e.price} 
        />
      ))}
    </div>
  );
}

export default Home;