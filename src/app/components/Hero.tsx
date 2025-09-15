import { Movie } from "../types";

import { FaPlay } from "react-icons/fa";

interface HeroProps {
  movie: Movie;
  onPlayMovie: (movie: Movie) => void;
}

export function Hero({ movie, onPlayMovie }: HeroProps) {
  return (
    <div className="relative h-[60vh] mb-8">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `{url(${movie.image})}` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from black via-black to-transparent"></div>
      </div>

      <div className="relative z-10 flex items-center h-full px-6">
        <div className="max-w-lg">
          <h1 className="text-white text-5xl mb-4">{movie.title}</h1>
          <p className="text-gray-300 text-lg mb-6">{movie.description}</p>
          <div className="flex gap-4">
            <button
              onClick={() => onPlayMovie(movie)}
              className="bg-white text-white px-8 py-3 rounded flex items-center gap-2 hover:bg-gray-200 transition-colors"
            >
              <FaPlay className="w-5 h-5" />
            </button>
            <button className="bg-gray-600 text-white px-8 py-3 rounded hover:bg-gray-500 transition-colors">
              More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
