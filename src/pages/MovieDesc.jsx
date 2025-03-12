import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Header from "../sections/Header";
import { MovieContext } from "../context/MovieContext";
import MovieDescComponent from "../components/MovieDescComponent";
import Footer from "../sections/Footer";

const MovieDesc = () => {
  const { id } = useParams(); // Get movie ID from URL
  const { movies } = useContext(MovieContext); // Get movies from context

  // Find the movie by ID
  const movie = movies.find((m) => m.id.toString() === id);

  // If movie not found, show error
  if (!movie) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center">
        <p className="text-xl">Movie not found!</p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-blue-900 via-gray-800 to-black text-white min-h-screen">
      {/* Full-width Header */}
      <Header />

      {/* Movie Details (Using the Separate Component) */}
      <MovieDescComponent movie={movie} />

      <Footer />
    </div>
  );
};

export default MovieDesc;
