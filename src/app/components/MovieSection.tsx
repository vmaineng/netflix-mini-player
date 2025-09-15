import { MovieCard } from "./MovieCard";
import { Movie } from "../types";

interface MovieSectionProps {
  title: string;
  movies: Movie[];
  onPlayMovie: (movie: Movie) => void;
}

export function MovieSection({
  title,
  movies,
  onPlayMovie,
}: MovieSectionProps) {
  return (
    <section className="mb-8">
      <h2 className="text-white text-xl mb-4 px-6">{title}</h2>
      <div className="px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} onPlay={onPlayMovie} />
          ))}
        </div>
      </div>
    </section>
  );
}
