import React, { useState, useContext } from "react";
import HeaderComponent from "../components/HeaderComponent";
import { MovieContext } from "../context/MovieContext"; // ✅ Import MovieContext

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { movies, isLoading } = useContext(MovieContext); // ✅ Use Context

  // Extract unique languages, genres, and years
  const uniqueLanguages = [
    ...new Set(movies.flatMap((movie) => movie.language)),
  ];
  const uniqueGenres = [...new Set(movies.flatMap((movie) => movie.genre))];
  const sortedYears = [...new Set(movies.map((movie) => movie.year))].sort(
    (a, b) => b - a
  );

  // Filter movies based on search input
  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      movie.genre.some((g) =>
        g.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="bg-gray-900 shadow w-full max-w-[1200px]">
      <HeaderComponent
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        languages={uniqueLanguages}
        genres={uniqueGenres}
        years={sortedYears}
        filteredMovies={filteredMovies}
      />
    </div>
  );
};

export default Header;
