import React from "react";
import Header from "../sections/Header";

const MovieDesc = () => {
  return (
    <div className="bg-gradient-to-b from-blue-900 via-gray-800 to-black text-white min-h-screen">
      {/* Full-width Header */}
      <Header />

      <div className="max-w-4xl mx-auto bg-black text-white p-6 rounded-lg mt-6">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyF1OQwKAQi87Q7k_B-gItWTQnvxmiXgmpa-Js-57pvF2DaHjQcgwyMKUTALeBA1kpzgY&usqp=CAU"
              alt="Jathara"
              className="rounded-lg w-full"
            />
          </div>
          <div className="md:w-2/3 md:pl-6 mt-4 md:mt-0">
            <h1 className="text-4xl font-bold">Jathara</h1>
            <p className="text-gray-400 mt-1">2024</p>
            <p className="text-yellow-400 mt-2">Action / Adventure / Drama</p>
            <p className="mt-3">
              <span className="font-bold">🎭 Description:</span> Avatar (2009)
              is a sci-fi epic directed by James Cameron, set on the alien world
              of Pandora, where humans exploit resources while a paraplegic
              Marine, Jake Sully, integrates with the native Na’vi. The film
              explores themes of environmentalism, colonialism, and identity
              through stunning visual effects and groundbreaking 3D technology.
            </p>

            <div className="flex gap-4 mt-4">
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

export default MovieDesc;
