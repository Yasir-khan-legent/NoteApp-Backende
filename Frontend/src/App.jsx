import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/signup";
import "./pages/Auth.css";
import Login from "./pages/login";
import Home from "./pages/Home";
import DetailsPage from "./pages/Detailspage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />

          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/details/:id" element={<DetailsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
