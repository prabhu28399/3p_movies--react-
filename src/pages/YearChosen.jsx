import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiMovies } from "../api/moviesApi.js";
import Header from "../sections/Header.jsx";

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

  if (loading) {
    return <div className="text-center text-white">Loading movies...</div>;
  }

  return (
    <div>
      <Header />
      <h2 className="text-3xl font-bold mb-6">Movies from {year}</h2>
      {movies.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <div
              key={movie.id || movie.title}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              {/* ✅ Debugging: Log poster URL */}
              {console.log("Image URL:", movie.posterUrl)}

              <img
                src={movie.posterUrl}
                alt={movie.title}
                className="w-full h-60 object-cover"
                onError={(e) => (e.target.src = "/default-image.jpg")} // ✅ Handle broken images
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{movie.title}</h3>
                <p className="text-gray-400">
                  {Array.isArray(movie.genre)
                    ? movie.genre.join(", ")
                    : movie.genre}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-400">No movies found for {year}.</p>
      )}
    </div>
  );
};

export default YearChosen;
