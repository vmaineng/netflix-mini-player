"use client";
import { Navbar } from "./components/Navbar";
import { MovieSection } from "./components/MovieSection";
import { MiniPlayer } from "./components/Miniplayer";
import { useState } from "react";
import { Movie } from "./types";
import { movies } from "./data/movies";
import { Hero } from "./components/Hero";

export default function Home() {
  const [currentlyPlaying, setCurrentlyPlaying] = useState<Movie | null>(null);

  const handlePlayMovie = (movie: Movie) => {
    setCurrentlyPlaying(movie);
  };

  const handleCloseMiniPlayer = () => setCurrentlyPlaying(null);

  const sections = [
    { title: "Trending Now", movies: movies.slice(0, 5) },
    {
      title: "Action & Thrillers",
      movies: movies.filter((m) => ["Action", "Thriller"].includes(m.genre)),
    },
    {
      title: "Drama & Comedy",
      movies: movies.filter((m) => ["Drama", "Comedy"].includes(m.genre)),
    },
    {
      title: "Sci-Fi & Horror",
      movies: movies.filter((m) => ["Sci-Fi", "Horror"].includes(m.genre)),
    },
  ];

  return (
    <div>
      <Navbar />
      <main className="pt-20 pb-8">
        <Hero movie={movies[0]} onPlayMovie={handlePlayMovie} />

        {sections.map((section) => (
          <MovieSection
            key={section.title}
            title={section.title}
            movies={section.movies}
            onPlayMovie={handlePlayMovie}
          />
        ))}
      </main>
      {currentlyPlaying && (
        <MiniPlayer movie={currentlyPlaying} onClose={handleCloseMiniPlayer} />
      )}
    </div>
  );
}
