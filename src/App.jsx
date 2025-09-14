import './App.css';
import Header from './components/Header.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
// import Cart from './components/Cart.jsx'
// import Home from './components/Home.jsx';
// import Registro from './components/Registro.jsx'
// import Login from './components/Login.jsx'
import Pizza from './components/Pizza.jsx';

function App() {
  return(
    <div>
      <Navbar/>
      <Header/>
      {/* <Cart/> */}
      {/* <Home/> */}
      {/* <Registro/>
      <Login/> */}
      <Pizza/>
      <Footer/>
    </div>
  )
}

export default App