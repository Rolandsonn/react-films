import React, { useState } from "react";
import styles from "./HomePage.module.scss";

import axios from "axios";

import BtnUp from "../../components/BtnUp";
import MovieList from "../../components/movies";
import LoadMoreBtn from "../../components/LoadMoreBtn";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function HomePage() {
  const [films, setFilms] = useState([]);
  const [categ, setCateg] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const API_KEY = process.env.REACT_APP_API_KEY;

  //? get trending films
  useEffect(() => {
    const apiUrl = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&page=${currentPage}&media_type=tv&append_to_response=videos`;
    axios.get(apiUrl).then((response) => {
      const data = response.data;
      setFilms((prevState) => {
        return [...films, ...data.results];
      });
    });
  }, [currentPage]);

  //todo get genres
  useEffect(() => {
    const getByGenre = async () => {
      try {
        await axios
          .get(`https://api.themoviedb.org/4/list/28?page=1&api_key=${API_KEY}`)
          .then((res) => {
            setCateg(() => [...films, ...res.data.results]);
          });
      } catch (error) {
        console.error("Smth wrong with api get full trends" + error);
      }
    };
    getByGenre();
  });

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
