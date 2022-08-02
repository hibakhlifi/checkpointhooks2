import React,{useState} from "react";
import {MovieData} from '../src/Components/MovieData';
import MovieList from "../src/Components/MovieList";
import NavBar from "./Components/NavBar";
import AddMovie from "./Components/AddMovie";
import "./App.css";



function App() {
  const [movies, setMovies] = useState(MovieData)
  const [nameSearch, setNameSearch] = useState('');
  const [ratingSearch,setRatingSearch] = useState(0)
  return (
    <div className="App">
    
      <NavBar  nameSearch={nameSearch}
      ratingSearch ={ratingSearch} 
      movies={movies} 
      setMovies={setMovies} 
      NameSearch={setNameSearch} 
      RatingSearch={setRatingSearch}></NavBar>

      
      <MovieList 
      movies={movies} 
      nameSearch={nameSearch} 
      ratingSearch={ratingSearch}  
      />
      
      <AddMovie
      movies={movies} 
      setMovies={setMovies}
     />
    </div>
  );
}

export default App;