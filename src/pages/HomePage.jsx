import React from "react";
import Header from "../sections/Header.jsx";
import "../assets/css/homepage.css";
import MovieCards from "../sections/MovieCards.jsx";
import Footer from "../sections/Footer.jsx";
const HomePage = () => {
  return (
    <div>
      <Header />
      <MovieCards />
      <Footer />
    </div>
  );
};

export default HomePage;
