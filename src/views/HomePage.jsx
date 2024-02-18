import React, { useContext } from "react";
import AppContext from "../appContext";
import Movie from "../components/Movie";

const HomePage = () => {
  const {} = useContext(AppContext);
  return (
    <>
      <div>
        <Movie />
      </div>
    </>
  );
};

export default HomePage;
