import React, { useState, useEffect } from 'react';
import axios from 'axios';
import options from '../api';
import MovieCard from '../components/MovieCard';
import TopMovies from '../components/TopMovies';
import MovieModal from '../components/MovieModal';

interface Movie {
  id: number;
  title: string;
  poster: string;
}

const Homepage: React.FC = () => {

  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedMovieId, setSelectedMovieId] = useState<number | null>(null);

  useEffect(() => {
    async function fetchMovies() {
      axios.get(options.url + '/movie/now_playing', options)
        .then(response => {
          const movies = response.data.results.map((movie: any) => ({
            id: movie.id,
            title: movie.original_title,
            poster: movie.poster_path,
          }));
          setMovies(movies);
        })
        .catch(error => {
          console.error(error);
        });
    }

    fetchMovies();
  }, []);
  

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col gap-16">
      <div>
        <h1 className="text-6xl font-bold text-[#e8c3f0] uppercase mb-8 text-center">New Movies</h1>
        <div className="flex flex-wrap justify-center gap-8">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              poster={movie.poster}
              onClick={() => setSelectedMovieId(movie.id)}
            />
          ))}
        </div>
      </div>
      <div>
        <h2>Top rated</h2>
        <TopMovies />
      </div>
      {selectedMovieId && (
        <MovieModal movieId={selectedMovieId} onClose={() => setSelectedMovieId(null)} />
      )}
    </div>
  );
};

export default Homepage;
