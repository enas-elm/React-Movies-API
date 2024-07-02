import React from 'react';

interface MovieCardProps {
  title: string;
  poster: string;
  onClick: () => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ title, poster, onClick }) => {
  return (
    <div className="movie-card relative bg-white shadow-xl rounded-lg overflow-hidden cursor-pointer" onClick={onClick}>
      <div className="block">
        <div className="relative">
          <img src={`https://image.tmdb.org/t/p/w200${poster}`} alt={title} className="w-full h-auto" />
          <div className="gradient-overlay"></div>
          <p className="absolute bottom-0 left-0 right-0 text-white text-lg font-semibold px-4 py-2 bg-gradient-to-t from-black to-transparent">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
