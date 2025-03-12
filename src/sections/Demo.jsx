import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { MovieContext } from "../context/MovieContext";
import Header from "../sections/Header";
import CardComponent from "../components/CardComponent";

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
    <div className="bg-black min-h-screen">
      {/* Full-width Header */}
      <div className="bg-gray-900 shadow w-full max-w-[1200px] mx-auto">
        <Header />
      </div>

      {/* Movies Section */}
      <div className="bg-black py-10 flex justify-center">
        <div className="w-[90%] max-w-[1200px]">
          <h2 className="text-3xl font-bold text-white mb-6">
            Movies in {lang}
          </h2>

          {isLoading ? (
            <p className="text-white text-center">Loading movies...</p>
          ) : filteredMovies.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {filteredMovies.map((movie, index) => (
                <CardComponent key={index} movie={movie} />
              ))}
            </div>
          ) : (
            <p className="text-white text-center">No movies found in {lang}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LangChosen;
