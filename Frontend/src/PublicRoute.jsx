import { Navigate } from "react-router-dom";

export default function PublicRoute({ children }) {
  const token = document.cookie.includes("token");

  return token ? <Navigate to="/home" replace /> : children;
}
