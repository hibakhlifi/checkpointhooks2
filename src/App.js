import React, { useState } from "react";
import { MovieData } from "../src/Components/MovieData";
import MovieList from "../src/Components/MovieList";
import NavBar from "./Components/NavBar";
import AddMovie from "./Components/AddMovie";
import { Route, Routes } from "react-router-dom";
import Description from "./Components/Description/Description";
import "./App.css";

function App() {
  const [movies, setMovies] = useState(MovieData);
  const [nameSearch, setNameSearch] = useState("");
  const [ratingSearch, setRatingSearch] = useState(0);

  return (
    <div className="App">
              <div>
                <NavBar
                  nameSearch={nameSearch}
                  ratingSearch={ratingSearch}
                  movies={movies}
                  setMovies={setMovies}
                  NameSearch={setNameSearch}
                  RatingSearch={setRatingSearch}
                />
                <MovieList
                  movies={movies}
                  nameSearch={nameSearch}
                  ratingSearch={ratingSearch}
                />
                <AddMovie movies={movies} setMovies={setMovies} />
              </div>
            );
          
            <Routes>
            <Route path="/description" component={<Description/>} />
      </Routes>
    </div>
  );
}

export default App;
