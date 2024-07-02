import React, { useEffect, useState } from 'react';
import axios from 'axios';
import options from '../api';


interface MovieModalProps {
  movieId: number | null;
  onClose: () => void;
}

interface Movie {
  id: number;
  title: string;
  overview: string;
  tagline: string;
  poster: string;
  release: string;
  runtime: number;
  genres: string[];
  vote: number;
}

const MovieModal: React.FC<MovieModalProps> = ({ movieId, onClose }) => {
  const [movie, setMovie] = useState<Movie | null>(null);
  
  useEffect(() => {
    if (movieId) {
      axios.get(options.url + `/movie/${movieId}`, options)
        .then(response => {
          const movieData = {
            id: response.data.id,
            title: response.data.original_title,
            overview: response.data.overview,
            tagline: response.data.tagline,
            poster: response.data.poster_path,
            release: response.data.release_date,
            runtime: response.data.runtime,
            genres: response.data.genres.map((genre: any) => genre.name),
            vote: response.data.vote_average,
          };
          setMovie(movieData);
        })
        .catch(error => {
          console.error('Error fetching movie:', error);
        });
    }
  }, [movieId]);

  if (!movie) return null;
  return (
    <div  className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-4 m-10 max-w-3xl w-full relative">
        <button onClick={onClose} className="absolute top-0 right-4 text-4xl">&times;</button>
        <div className="flex flex-col md:flex-row items-center text-black">
          <img src={`https://image.tmdb.org/t/p/w400${movie.poster}`} alt={movie.title} className="w-1/4 rounded-lg mb-4" />
          <div className="ml-6 w-full flex flex-col gap-3">
            <div>
              <h1 className='text-4xl font-bold'>{movie.title}</h1>
              <p className="italic text-lg text-gray-600">{movie.tagline}</p>
            </div>
            <div className='flex gap-2 align-middle'>
              <p className="text-sm text-gray-600"><span className='font-semibold'>Release:</span> {movie.release}</p>
              <p className='text-sm text-gray-600'><span className='font-semibold'>Runtime:</span> {movie.runtime} min</p>
            </div>
            <p className="text-yellow-500">⭐ {movie.vote}</p>
            <div className="flex flex-wrap items-center gap-2">
              <p className="text-sm text-gray-600 font-semibold">Genre:</p>
              <div className="flex flex-wrap gap-2">
                {movie.genres.map((genre: string, index: number) => (
                  <span key={index} className="text-sm font-medium bg-gray-200 text-gray-800 px-2 py-1 rounded">
                    {genre}
                  </span>
                ))}
              </div>
            </div>
            <p>{movie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
