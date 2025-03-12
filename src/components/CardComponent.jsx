import React from "react";

const CardComponent = ({ movie }) => {
  return (
    <div className="relative w-full h-[450px] rounded-lg overflow-hidden shadow-lg bg-gray-900 hover:scale-105 transition-transform">
      {/* Movie Cover Image */}
      <div className="w-full h-[65%]">
        <img
          src={movie.image}
          alt={movie.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Movie Details */}
      <div className="h-[35%] p-3 text-white flex flex-col justify-center">
        <h2 className="text-sm font-bold">
          {movie.title} ({movie.year})
        </h2>
        <p className="text-xs text-gray-400">IMDb: {movie.imdb} ⭐</p>
        <p className="text-xs text-gray-400">
          Languages: {movie.language.join(", ")}
        </p>
        <p className="text-xs mt-1">{movie.description}</p>
      </div>
    </div>
  );
};

export default CardComponent;
