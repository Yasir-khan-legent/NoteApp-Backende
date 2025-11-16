import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const token = document.cookie.includes("token");  // JWT cookie

  return token ? children : <Navigate to="/login" replace />;
}
