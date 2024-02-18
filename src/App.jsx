import "./App.css";
import HomePage from "./views/HomePage";
import MoviePage from "./views/MoviePage";
import AppContext from "./appContext";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [movies, setMovies] = useState([
    {
      name: "SpiderMan",
      id: 1,
      rate: { ratingValue: 0, voting: 0 },
      image: "Red",
    },
    {
      name: "The Dark Knight",
      id: 2,
      rate: { ratingValue: 0, voting: 0 },
      image: "Navy",
    },
    {
      name: "The Matrix",
      id: 3,
      rate: { ratingValue: 0, voting: 0 },
      image: "Green",
    },
  ]);

  const getMovieByName = (movieName) => {
    return movies.find((movie) => movie.name === movieName);
  };

  const contextValue = {
    movies,
    setMovies,
    getMovieByName,
  };

  return (
    <AppContext.Provider value={contextValue}>
      <>
        <h1 id="mainTitle">BM</h1>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/moviepage" element={<MoviePage />} />
          <Route path="/moviepage/:movieName" element={<MoviePage />} />
        </Routes>
      </>
    </AppContext.Provider>
  );
}

export default App;
