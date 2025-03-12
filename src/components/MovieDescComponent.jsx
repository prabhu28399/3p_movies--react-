import React from "react";

const MovieDescComponent = ({ movie }) => {
  return (
    <div className="bg-black py-1 flex justify-center">
      <div className="w-full max-w-[1200px]">
        <div className="flex flex-col md:flex-row bg-gray-900 p-6 rounded-lg">
          <div className="md:w-1/3">
            <img
              src={movie.image}
              alt={movie.title}
              className="rounded-lg w-full"
            />
          </div>
          <div className="md:w-2/3 md:pl-6 mt-4 md:mt-0">
            <h1 className="text-4xl font-bold">{movie.title}</h1>
            <p className="text-gray-400 mt-3">{movie.year}</p>
            <p className="text-yellow-400 mt-5">{movie.genre.join(" / ")}</p>

            {/* Movie Description */}
            <p className="mt-3">
              <span className="font-bold">🎭 Description:</span>{" "}
              {movie.description}
            </p>

            {/* Movie Storyline */}
            {movie.storyline && (
              <p className="mt-3">
                <span className="font-bold">📖 Storyline:</span>{" "}
                <span className="text-gray-300 italic">{movie.storyline}</span>
              </p>
            )}

            <div className="flex gap-4 mt-20">
              <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded flex items-center">
                📽 TRAILER
              </button>
              <button className="bg-yellow-400 hover:bg-yellow-300 text-black px-4 py-2 rounded flex items-center">
                ⬇ MOBILE DOWNLOAD
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDescComponent;
