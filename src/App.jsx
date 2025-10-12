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
import { ProtectedRoute } from './components/ProtectedRoute.jsx';
import { useUser } from './context/UserContext.jsx';

function App() {
  const { token } = useUser(); // Consumir el UserContext para rutas protegidas

  return (
    <div>
      <Navbar />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        {/* Rutas de registro/login: si token=true redirige al home */}
        <Route path="/registro" element={token ? <Navigate to="/" /> : <Registro />} />
        <Route path="/login" element={token ? <Navigate to="/" /> : <Login />} />

        <Route path="/cart" element={<Cart />} />

        {/* Pizza con id dinámico */}
        <Route path="/pizza/:id" element={<Pizza />} />

        {/* Ruta protegida */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* Página 404 */}
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;