import React, { useState, useEffect } from "react";
import { apiMovies } from "../api/moviesApi.js"; // Import API function
import CardComponent from "../components/CardComponent.jsx"; // Import CardComponent

const MovieCards = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await apiMovies(); // Fetch movie data
        setMovies(response);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="bg-black py-10 flex justify-center">
      <div className="w-[90%] max-w-[1200px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {movies.map((movie, index) => (
            <CardComponent key={index} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieCards;
