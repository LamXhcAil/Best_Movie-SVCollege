import React, { useContext, useState } from "react";
import AppContext from "../appContext";
import { useParams } from "react-router-dom";
import RatingButtons from "../components/RatingButtons";

const MoviePage = () => {
  const { movieName } = useParams();

  const { getMovieByName } = useContext(AppContext);

  const movie = getMovieByName(movieName);
  const [ratingValue, setRatingValue] = useState(movie.rate.ratingValue);

  const handleRatingUpdate = (newRatingValue) => {
    setRatingValue(newRatingValue);
  };

  return (
    <>
      <div>{movieName}</div>
      <br />
      <div
        style={{
          backgroundColor: movie.image,
          width: "100px",
          height: "100px",
          margin: "auto",
        }}
      >
        <br />
        "Movie Image"
      </div>
      <br />
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed distinctio,
        similique nihil facilis iure fugiat pariatur aliquid fuga commodi,
        voluptas dolore assumenda? Nulla quis optio, accusantium, reprehenderit
        eaque facere consectetur dolores quae iste minus impedit ipsa mollitia.
        Deleniti sit fuga sint inventore neque nulla, eum nihil minima quae quia
        obcaecati dolorum facilis nemo est porro illo incidunt, voluptatum
        aperiam itaque.
      </div>
      <br />
      <div>
        Movie Rating: {ratingValue.toFixed(1)}
        <br />
        <RatingButtons handleRatingUpdate={handleRatingUpdate} />
      </div>
    </>
  );
};

export default MoviePage;
