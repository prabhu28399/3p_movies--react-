import React from "react";
import { Menu, X, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const HeaderComponent = ({
  menuOpen,
  setMenuOpen,
  searchTerm,
  setSearchTerm,
  languages,
  genres,
  years,
  filteredMovies,
}) => {
  const navigate = useNavigate();

  return (
    <header>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="flex justify-between items-center py-8">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link
              to="/"
              className="flex items-center space-x-2 text-2xl font-bold"
            >
              <span className="text-red-500">3P</span>
              <span className="text-green-500">Movies</span>
              <span className="text-purple-500">🎬</span>
            </Link>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center bg-gray-800 rounded-lg overflow-hidden w-1/3">
            <input
              type="text"
              placeholder="Search movies..."
              className="bg-transparent px-4 py-2 outline-none text-white placeholder-gray-400 w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="p-2">
              <Search size={20} className="text-white" />
            </button>
          </div>

          {/* Buttons */}
          <div className="hidden md:flex space-x-4">
            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition duration-200">
              Bollywood
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition duration-200">
              AnimeFlix
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav
        className={`w-full bg-gray-800 mt-4 p-4 ${
          menuOpen ? "block" : "hidden"
        } md:flex md:justify-center`}
      >
        <div className="grid grid-cols-2 md:flex md:space-x-6 w-full">
          {[
            "Home",
            "Movies",
            "Language",
            "Genre",
            "Year",
            "Web Series",
            "TV Series",
            "PC Games",
          ].map((item) => (
            <div className="relative group" key={item}>
              <button className="w-full md:w-auto px-5 text-white text-center rounded-lg hover:bg-gray-700 transition duration-200">
                {item}
              </button>
              {/* Hover Dropdowns */}
              {item === "Language" && (
                <div className="absolute bg-white text-black p-2 shadow-lg hidden group-hover:block z-10 max-h-60 overflow-y-auto">
                  {languages.map((lang) => (
                    <p
                      key={lang}
                      className="px-3 py-1 hover:bg-gray-200 cursor-pointer"
                      onClick={() => navigate(`/language/${lang}`)}
                    >
                      {lang}
                    </p>
                  ))}
                </div>
              )}
              {item === "Genre" && (
                <div className="absolute bg-white text-black p-2 shadow-lg hidden group-hover:block z-10">
                  {genres.map((genre) => (
                    <p
                      key={genre}
                      className="px-3 py-1 hover:bg-gray-200 cursor-pointer"
                      onClick={() => navigate(`/genre/${genre}`)}
                    >
                      {genre}
                    </p>
                  ))}
                </div>
              )}
              {/* ✅ Only IMDb gets an onClick */}

              {item === "Year" && (
                <div className="absolute bg-white text-black p-2 shadow-lg hidden group-hover:block z-10 max-h-60 overflow-y-auto">
                  {years.slice(0, 10).map((year) => (
                    <p
                      key={year}
                      className="px-3 py-1 hover:bg-gray-200 cursor-pointer"
                      onClick={() => navigate(`/year/${year}`)}
                    >
                      {year}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
          <button
            className="w-full md:w-auto px-5 text-white text-center rounded-lg hover:bg-gray-700 transition duration-200"
            onClick={() => navigate("/imdb")}
          >
            IMDB
          </button>
        </div>
      </nav>

      {/* Search Results Dropdown */}
      {searchTerm && (
        <div className="absolute top-20 left-0 right-0 bg-white text-black p-2 max-h-60 overflow-auto shadow-lg">
          {filteredMovies.length > 0 ? (
            filteredMovies.map((movie) => (
              <div key={movie.id} className="p-2 border-b">
                {movie.title} - {movie.genre}
              </div>
            ))
          ) : (
            <p className="p-2">No movies found</p>
          )}
        </div>
      )}
    </header>
  );
};

export default HeaderComponent;
