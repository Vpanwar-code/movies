import React from 'react';
import { useState } from 'react';
import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies,setMovies]=useState([]);
  async function fetchMoviesHandler(){

    const response=await fetch('https://swapi.dev/api/films');
    const data=await response.json();

    const transformedmovies = data.results.map(movieData =>{
      return{
        id : movieData.spisode_id,
        title : movieData.title,
        openingText : movieData.opening_crawl,
        releaseDate : movieData.release_date,
      };
    });
    console.log(transformedmovies);
    setMovies(transformedmovies);
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
