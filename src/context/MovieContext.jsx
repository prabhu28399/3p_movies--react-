import React, { createContext, useState, useEffect } from "react";
import { apiMovies } from "../api/moviesApi.js"; // Ensure this path is correct

// Create Context
export const MovieContext = createContext();

// Movie Provider Component
export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      console.log("Fetching movies..."); // Debug log to check if useEffect runs

      try {
        const response = await apiMovies();
        console.log("Fetched Movies:", response); // Debug log for response

        if (Array.isArray(response)) {
          setMovies(response);
        } else {
          console.error("Invalid API response format:", response);
          setMovies([]); // Set empty array to avoid undefined errors
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <MovieContext.Provider value={{ movies, isLoading }}>
      {children}
    </MovieContext.Provider>
  );
};
