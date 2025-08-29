import Card from "./Card.jsx";
import data from "../assets/data/data.js";

function Home() {
  return (
    <div className="flex flex-wrap justify-center gap-6 bg-black py-10 max-h-screen">
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