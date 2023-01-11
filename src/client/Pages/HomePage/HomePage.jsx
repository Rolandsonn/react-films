import React, { useState } from "react";
import styles from "./HomePage.module.scss";

import axios from "axios";

import BtnUp from "../../components/BtnUp";
import MovieList from "../../components/movies";
import LoadMoreBtn from "../../components/LoadMoreBtn";
import { useEffect } from "react";

export default function HomePage() {
  const [films, setFilms] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const API_KEY = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    const apiUrl = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&page=${currentPage}&media_type=tv`;
    axios.get(apiUrl).then((response) => {
      const data = response.data;
      setFilms((prevState) => {
        console.log(prevState);
        return [...films, ...data.results];
      });
    });
  }, [currentPage]);

  const showMoreFilms = () => {
    setCurrentPage((prevState) => prevState + 1);
  };

  return (
    <div className={styles.MoviePage}>
      <div className={styles.rap}>
        <MovieList data={films} />
        <LoadMoreBtn onClick={showMoreFilms} />
      </div>
      {films.length > 0 && <BtnUp />}
    </div>
  );
}
