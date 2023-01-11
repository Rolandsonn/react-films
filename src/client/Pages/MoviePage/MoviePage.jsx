import React from "react";
import { useState, useEffect } from "react";

import axios from "axios";

import styles from "./MoviePage.module.scss";

import BtnUp from "../../components/BtnUp";
import Searchbar from "../../components/Searchbar";
import MovieList from "../../components/movies";
import LoadMoreBtn from "../../components/LoadMoreBtn";

export default function MoviePage() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("");
  const [films, setFilms] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const API_KEY = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    const apiUrl = `https://api.themoviedb.org/3/search/movie/?api_key=${API_KEY}&language=en-US&page=${currentPage}&include_adult=true&query=${query}&video=true`;
    if (query !== "") {
      axios.get(apiUrl).then((response) => {
        const data = response.data;
        setFilms((prevState) => [...prevState, ...data.results]);
      });
    }
  }, [currentPage, API_KEY]);

  useEffect(() => {
    const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=${currentPage}&include_adult=true&query=${query}&`;
    console.log(type);
    if (query !== "") {
      axios.get(apiUrl).then((response) => {
        const data = response.data;
        setFilms(data.results);
      });
    }
  }, [query]);

  const handleChange = (e) => {
    setQuery(e.currentTarget.value);
  };

  const handleSubmit = (query, type) => {
    setQuery(query);
    setType(type);
  };

  const showMoreFilms = () => {
    setCurrentPage((prevState) => prevState + 1);
  };

  return (
    <>
      <div className={`${styles.MoviePage} `}>
        <Searchbar
          onChange={handleChange}
          onSubmit={handleSubmit}
          data={query}
        />
        <div className={styles.MoviePage__wrapper}>
          <MovieList data={films} />
          {films.length > 0 && <LoadMoreBtn onClick={showMoreFilms} />}
        </div>
      </div>
      {films.length > 0 && <BtnUp />}
    </>
  );
}
