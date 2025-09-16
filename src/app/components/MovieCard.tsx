import { useState } from "react";
import { FaPlay, FaPlus, FaChevronDown, FaThumbsUp } from "react-icons/fa";
import { Movie } from "../types";
import Image from "next/image";

interface MovieCardProps {
  movie: Movie;
  onPlay: (movie: Movie) => void;
}

export function MovieCard({ movie, onPlay }: MovieCardProps) {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div
      className="relative group cursor-pointer transition-transform duration-300 hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-[16/9] rounded-lg overflow-hidden">
        <Image
          src={movie.image}
          alt={movie.title}
          width="100"
          height="100"
          className="w-full h-full object-cover"
        />
      </div>
      {isHovered && (
        <div className="absolute inset-0 bg-black/60 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex gap-2">
            <button
              onClick={() => onPlay(movie)}
              className="bg-white text-black rounded-full p-2 hover:bg-gray-200 transition-colors"
            >
              <FaPlay className="w-5 h-5 fill-current" />
            </button>
            <button className="bg-gray-700 text-white rounded-full p-2 hover:bg-gray-600 transition-colors">
              <FaPlus className="w-5 h-5" />
            </button>
            <button className="bg-gray-700 text-white rounded-full p-2 hover:bg-gray-600 transition-colors">
              <FaThumbsUp className="w-5 h-5" />
            </button>
            <button className="bg-gray-700 text-white rounded-full p-2 hover:bg-gray-600 transition-colors">
              <FaChevronDown className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      <div className="mt-2">
        <h3 className="text-white truncate"> {movie.title}</h3>
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <span>{movie.year}</span>
          <span>•</span>
          <span>{movie.duration}</span>
          <span>•</span>
          <span>{movie.genre}</span>
        </div>
      </div>
    </div>
  );
}
