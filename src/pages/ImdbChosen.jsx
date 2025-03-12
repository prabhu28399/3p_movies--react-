import React, { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import Header from "../sections/Header.jsx";
import CardComponent from "../components/CardComponent.jsx";

const ImdbChosen = () => {
  const { movies, isLoading } = useContext(MovieContext);

  // Sort movies by IMDb rating (highest to lowest)
  const sortedMovies = [...movies]
    .filter((movie) => movie.imdb) // Ensure IMDb rating exists
    .sort((a, b) => b.imdb - a.imdb);

  return (
    <div className="bg-gradient-to-b from-blue-900 via-gray-800 to-black text-white min-h-screen">
      {/* Full-width Header */}
      <Header />

      {/* Movie Display Section */}
      <div className="bg-black py-10 flex justify-center">
        <div className="w-[90%] max-w-[1200px]">
          <h2 className="text-3xl font-bold  mb-6">Top IMDb Rated Movies</h2>
          {isLoading ? (
            <p className="text-center">Loading movies...</p>
          ) : sortedMovies.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {sortedMovies.map((movie) => (
                <CardComponent key={movie.id || movie.title} movie={movie} />
              ))}
            </div>
          ) : (
            <p className="text-center">No movies found with IMDb ratings.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImdbChosen;
