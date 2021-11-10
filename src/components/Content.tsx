import { MovieCard } from "../components/MovieCard";
import { GenreResponseProps } from "./SideBar";

export interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}


interface ContentProps {
  movies: MovieProps[];

  selectedGenre: GenreResponseProps;
}

export function Content({ movies, selectedGenre }: ContentProps) {
  // Complete aqui
return (
  <div className="container">
    <header>
      <span className="category">
        Categoria:<span> {selectedGenre.title}</span>
      </span>
    </header>

    <main>
      <div className="movies-list">
        {movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            title={movie.Title}
            poster={movie.Poster}
            runtime={movie.Runtime}
            rating={movie.Ratings[0].Value}
          />
        ))}
      </div>
    </main>
  </div>
);
}
