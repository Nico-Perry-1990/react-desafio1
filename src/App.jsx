import './App.css'
import Header from './assets/components/Header'
import Navbar from './assets/components/Navbar'
import Card from './assets/components/Card'
import data from './assets/data/data.js'
import Footer from './assets/components/Footer.jsx'

function App() {
  return(
    <div>
      <Navbar/>
      <Header/>
      <div className="flex flex-wrap justify-center gap-6 bg-gray-600 py-10">
        {data.map(e => (
          <Card key={e.id} img={e.img.src} name={e.name} ingredients={e.ingredients} price={e.price} />
        ))}
      </div>
      <Footer/>
    </div>
  )
}

export default App