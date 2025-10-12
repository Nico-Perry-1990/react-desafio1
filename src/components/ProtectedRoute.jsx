import { Navigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

export const ProtectedRoute = ({ children }) => {
  const { token } = useUser();
  return token ? children : <Navigate to="/login" />;
};