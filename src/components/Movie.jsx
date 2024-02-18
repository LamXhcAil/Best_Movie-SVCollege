import React, { useContext } from "react";
import AppContext from "../appContext";
import { useNavigate } from "react-router-dom";

const Movie = () => {
  const navigate = useNavigate();
  const { movies } = useContext(AppContext);

  return (
    <>
      {movies.map((movie, id) => (
        <button
          style={{ backgroundColor: movie.image }}
          key={id}
          onClick={() => {
            navigate(`/moviepage/${movie.name}`);
          }}
        >
          {movie.name}
        </button>
      ))}
    </>
  );
};

export default Movie;
