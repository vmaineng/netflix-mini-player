import { useState } from "react";
import { FaPlay, FaPause, FaWindowMaximize } from "react-icons/fa";
import { FaVolumeXmark, FaVolumeHigh } from "react-icons/fa6";

import { MdOutlineClose } from "react-icons/md";
import { Movie } from "../types";
import Image from "next/image";

interface MiniPlayerProps {
  movie: Movie;
  onClose: () => void;
  onExpand?: () => void;
}

export function MiniPlayer({ movie, onClose, onExpand }: MiniPlayerProps) {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [progress, setIsProgress] = useState<number>(30);

  return (
    <div className="fixed bottom-4 right-4 w-80 bg-black rounded-lg shadow-2xl border border-gray-700 z-50">
      <div className="relative aspect-video rounded-t-lg overflow-hidden">
        <Image
          src={movie.image}
          alt={movie.title}
          height="100"
          width="100"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
          >
            {isPlaying ? (
              <FaPause className="w-6 h-6" />
            ) : (
              <FaPlay className="w-6 h-6 fill-current" />
            )}
          </button>
        </div>

        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-black/50 text-white rounded-full p-1 hover:bg-black/70 transition-colors"
        >
          <MdOutlineClose className="w-4 h4" />
        </button>
      </div>

      <div className="px-3 py-1">
        <div className="w-full bg-gray-700 h-1 rounded-full">
          <div
            className="bg-red-600 h-1 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <div className="flex items-center justify-between p-3">
        <div className="flex-1">
          <h4 className="text-white text-sm truncate"> {movie.title}</h4>
          <p className="text-gray-400 text-xs">
            {movie.year} • {movie.genre}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="text-white hover:text-gray-300 transition-colors"
          >
            {isMuted ? (
              <FaVolumeXmark className="w-4 h-4" />
            ) : (
              <FaVolumeHigh className="w-4 h-4" />
            )}
          </button>

          {onExpand && (
            <button
              onClick={onExpand}
              className="text-white hover:text-gray-300 transition-colors"
            >
              <FaWindowMaximize className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
