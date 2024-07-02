# Movies Mini Project

This project is a React application that uses The Movie Database (TMDb) API to display a list of movies. Each movie can be clicked to open a detail modal.

The project is also available online at [django-multilingual-site.onrender.com](https://react-movies-api-theta.vercel.app/)

## Features

- Display a list of recent movies
- Display a list of top-rated movies
- Detail modal for each movie

## Installation and Setup

1. **Clone the repository**:
```bash
git clone https://github.com/your-username/mini-movie-search-project.git
cd mini-movie-search-project
````


2. **Install dependencies**:
```bash
npm install
````


3. **Configure environment variables**:
   Create a .env file at the root of the project and add the following lines. You need to obtain an API key from The Movie Database (TMDb) and replace your_api_key_here with your personal API key.
```bash
// .env
REACT_APP_API_URL=https://api.themoviedb.org/3
REACT_APP_API_KEY=your_api_key_here
````


4. **Start project**:
```bash
npm start
````

## Technologies Used

- React
- Tailwind CSS
- Axios
- TMDb API
