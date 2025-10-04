import './App.css';
import Header from './components/Header.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import { Routes, Route, Navigate } from "react-router-dom";

import Home from './pages/Home.jsx';
import Registro from './pages/Registro.jsx';
import Login from './pages/Login.jsx';
import Cart from './pages/Cart.jsx';
import Pizza from './pages/Pizza.jsx';
import Profile from './components/Profile.jsx';
import NotFound from './pages/NotFound.jsx';

function App() {
  return (
    <div>
      <Navbar />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/p001" element={<Pizza />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;