import React, { useContext, useState } from "react";

const favContext = React.createContext();
export const useFav = () => useContext(favContext);

export default function FavContext({ children }) {
  const [fav, setFav] = useState(JSON.parse(localStorage.getItem("fav")));

  const getFav = () => {
    let fav = JSON.parse(localStorage.getItem("fav"));

    if (!fav) {
      localStorage.setItem("fav", JSON.stringify({ movies: [] }));
    }

    setFav(fav);
  };

  const addMovieToFav = (movie) => {
    let fav = JSON.parse(localStorage.getItem("fav"));

    if (!fav) {
      fav = {
        movies: [],
      };
    }

    localStorage.setItem("fav", JSON.stringify(fav));

    setFav(fav);
  };

  const values = {
    getFav,
    addMovieToFav,
  };

  return <favContext.Provider value={values}>{children}</favContext.Provider>;
}
