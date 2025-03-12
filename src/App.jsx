import React from "react";
import { MovieProvider } from "./context/MovieContext.jsx"; // Import the provider
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LangChosen from "./pages/LangChosen";
import GenreChosen from "./pages/GenreChosen";
import YearChosen from "./pages/YearChosen";
import HomePage from "../src/pages/HomePage.jsx";

function App() {
  return (
    <MovieProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/language/:lang" element={<LangChosen />} />
          <Route path="/genre/:genre" element={<GenreChosen />} />
          <Route path="/year/:year" element={<YearChosen />} />
        </Routes>
      </Router>
    </MovieProvider>
  );
}

export default App;
