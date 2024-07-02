import React, { useState, useEffect } from 'react';
import options from '../api';
import axios from 'axios';
import MovieCard from './MovieCard';
import MovieModal from '../components/MovieModal';

interface Movie {
  id: number;
  title: string;
  poster: string;
}

const TopMovies: React.FC = () => {
    const [topMovies, setTopMovies] = useState<Movie[]>([]);
    const [selectedMovieId, setSelectedMovieId] = useState<number | null>(null);

  
  useEffect(() => {
    async function fetchMovies() {
      axios.get(options.url + '/movie/top_rated', options)
      .then(function (response) {
        console.log(response)
        const topMovies = response.data.results.map((movie: any) => ({
          'id' : movie.id,
          'title' :  movie.original_title, 
          'poster' : movie.poster_path,
        }));
        console.log(topMovies);
        setTopMovies(topMovies);
      })
      .catch(function (error) {
        console.error(error);
      });
    }
  
    fetchMovies();
  }, []);
 
  return (

      <div className="flex flex-wrap justify-center gap-8">
        {topMovies.slice(0, 5).map((movie) => (
           <MovieCard
           title={movie.title}
           poster={movie.poster}
           onClick={() => setSelectedMovieId(movie.id)}
         />
        ))}

      {selectedMovieId && (
        <MovieModal movieId={selectedMovieId} onClose={() => setSelectedMovieId(null)} />
      )}
      </div>
  );
};

  export default TopMovies;
  