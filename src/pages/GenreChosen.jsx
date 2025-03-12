import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { MovieContext } from "../context/MovieContext";
import Header from "../sections/Header";
import CardComponent from "../components/CardComponent";

const GenreChosen = () => {
  const { genre } = useParams();
  const { movies, isLoading } = useContext(MovieContext); // ✅ Use context

  // Filter movies by genre
  const filteredMovies = movies.filter(
    (movie) =>
      Array.isArray(movie.genre) &&
      movie.genre.some(
        (g) => g?.toLowerCase().trim() === genre.toLowerCase().trim()
      )
  );

  return (
    <div className="bg-gradient-to-b from-blue-900 via-gray-800 to-black text-white min-h-screen">
      <Header />
      <div className="w-[1250px] mx-auto pt-[80px] px-6">
        <h2 className="text-3xl font-bold">Movies in {genre}</h2>
        {isLoading ? (
          <p>Loading movies...</p>
        ) : filteredMovies.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {filteredMovies.map((movie) => (
              <CardComponent key={movie.id || movie.title} movie={movie} />
            ))}
          </div>
        ) : (
          <p>No movies found in {genre}</p>
        )}
      </div>
    </div>
  );
};

export default GenreChosen;
