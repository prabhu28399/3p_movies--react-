import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { MovieContext } from "../context/MovieContext";
import Header from "../sections/Header";
import CardComponent from "../components/CardComponent";
import Footer from "../sections/Footer";

const LangChosen = () => {
  const { lang } = useParams();
  const { movies, isLoading } = useContext(MovieContext);

  // Filter movies based on the selected language
  const filteredMovies = movies.filter(
    (movie) =>
      Array.isArray(movie.language) &&
      movie.language.some(
        (l) => l?.toLowerCase().trim() === lang.toLowerCase().trim()
      )
  );

  return (
    <div className="bg-gradient-to-b from-blue-900 via-gray-800 to-black text-white min-h-screen">
      {/* Full-width Header */}
      <Header />

      {/* Movie Display Section (Using the Reference Structure) */}
      <div className="bg-black py-10 flex justify-center">
        <div className="w-[90%] max-w-[1200px]">
          <h2 className="text-3xl font-bold mb-6">Movies in {lang}</h2>
          {isLoading ? (
            <p className="text-center">Loading movies...</p>
          ) : filteredMovies.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {filteredMovies.map((movie) => (
                <CardComponent key={movie.id || movie.title} movie={movie} />
              ))}
            </div>
          ) : (
            <p className="text-center">No movies found in {lang}</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LangChosen;
