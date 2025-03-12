import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiMovies } from "../api/moviesApi.js";
import Header from "../sections/Header.jsx";
import CardComponent from "../components/CardComponent.jsx";
import Footer from "../sections/Footer.jsx";

const YearChosen = () => {
  const { year } = useParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMoviesByYear = async () => {
      try {
        const response = await apiMovies();
        console.log("API Movies Response:", response); // ✅ Debugging

        const filteredMovies = response
          .filter((movie) => movie.year.toString() === year)
          .map((movie) => ({
            ...movie,
            posterUrl: movie.posterUrl || "/default-image.jpg", // ✅ Set default image if missing
          }));

        setMovies(filteredMovies);
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMoviesByYear();
  }, [year]);

  return (
    <div className="bg-gradient-to-b from-blue-900 via-gray-800 to-black text-white min-h-screen">
      {/* Full-width Header */}
      <Header />

      {/* Movie Display Section (Using the Reference Structure) */}
      <div className="bg-black py-10 flex justify-center">
        <div className="w-[90%] max-w-[1200px]">
          <h2 className="text-3xl font-bold mb-6">Movies from {year}</h2>
          {loading ? (
            <p className="text-center">Loading movies...</p>
          ) : movies.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {movies.map((movie) => (
                <CardComponent key={movie.id || movie.title} movie={movie} />
              ))}
            </div>
          ) : (
            <p className="text-center">No movies found for {year}.</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default YearChosen;
