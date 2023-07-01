import React from 'react';
import { useState } from 'react';
import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies,setMovies]=useState([]);
  const [isLoading, setIsLoading]=useState(false);
  const [error, setError]=useState(false);
  async function fetchMoviesHandler(){
    setIsLoading(true);
    setError(null);
    try{

      const response=await fetch('https://swapi.dev/api/films');

      if(!response.ok){
        throw new Error('something went wrong');
      }

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
      setIsLoading(false);
    } catch(error){
      setError(error.message);
      setIsLoading(false);
    }
   
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && !error && <p>Found no movies</p>}
        {!isLoading && error && <p>{error}</p>}
        {isLoading && <p>Loading...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
