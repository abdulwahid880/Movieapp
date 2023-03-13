import './App.css';
import SearchIcon from "./Search.svg";
import { useState , useEffect } from 'react';
import MovieCard from './MovieCard';
//4ace37c0

const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";
const movie1 = {
  "Title": "Batman Begins",
  "Year": "2005",
  "imdbID": "tt0372784",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
}
const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };
  return (
    <div className="app">   
   <h1>MovieLand</h1>
   <div className="search">
      <input
           placeholder = "Search for movies"
           value = {searchTerm}
           onChange = {(e)=>setSearchTerm(e.target.value)}
      />
      <img 
      src={SearchIcon}
      alt="searchtest"
      onClick={()=>searchMovies(searchTerm)}
      />
   </div>

   {
     movies?.length > 0 ?
     (<div className="container">
       {movies.map((movie)=> (
         <MovieCard movie = {movie}/>
       ))}
  </div>):
   (
     <div className="empty"><h2>No movies Found</h2></div>
   )
   }
   
    </div>
  );
}

export default App;
