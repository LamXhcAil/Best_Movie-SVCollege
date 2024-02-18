import React, { useContext, useState } from "react";
import AppContext from "../appContext";
import { useParams } from "react-router-dom";

const RatingButtons = (props) => {
  const [buttons, setButtons] = useState([
    { value: 1, vote: 0 },
    { value: 2, vote: 0 },
    { value: 3, vote: 0 },
    { value: 4, vote: 0 },
    { value: 5, vote: 0 },
  ]);

  const { movieName } = useParams();
  const { movies } = useContext(AppContext);

  const movieIndex = movies.findIndex((movie) => movie.name === movieName);
  const movie = movies[movieIndex];

  const handleButtonClick = (value) => {
    setButtons((prevButtons) => {
      const updatedButtons = [...prevButtons];
      const movieToUpdate = movies[movieIndex];

      updatedButtons.forEach((button) => {
        if (button.value === value) {
          button.vote += 1;
          movieToUpdate.rate.voting += 1;
        }
      });

      const sumOfProducts = updatedButtons.reduce(
        (accumulator, button) => accumulator + button.value * button.vote,
        0
      );
      const totalCount = updatedButtons.reduce(
        (accumulator, button) => accumulator + button.vote,
        0
      );

      const average = totalCount > 0 ? sumOfProducts / totalCount : 0;

      movieToUpdate.rate.ratingValue = average;

      props.handleRatingUpdate(movieToUpdate.rate.ratingValue);
      console.log(updatedButtons);

      return updatedButtons;
    });
  };

  return (
    <div>
      <div
        id="ratingButtonsContainer"
        style={{
          backgroundColor: "white",
          border: `5px solid ${movie.image}`,
          borderRadius: "10px",
          display: "inline-block",
          padding: "5px",
        }}
      >
        {buttons.map((button) => (
          <button
            key={button.value}
            value={button.value}
            className="ratingButtons"
            style={{ backgroundColor: movie.image }}
            onClick={(event) => {
              handleButtonClick(Number(event.target.value));
            }}
          >
            {button.value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RatingButtons;
