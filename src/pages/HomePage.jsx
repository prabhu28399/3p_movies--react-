import React from "react";
import Header from "../sections/Header.jsx";
import "../assets/css/homepage.css";
import MovieCards from "../sections/MovieCards.jsx";
const HomePage = () => {
  return (
    <div>
      <Header />
      <MovieCards />
    </div>
  );
};

export default HomePage;
