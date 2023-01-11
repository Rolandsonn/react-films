import React from "react";
import { useParams, Route, Routes, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import imageDef from "../../../image/default_image.png";
import BtnFavorites from "../../components/BtnFavorites";
import Cast from "../../components/cast";
import Reviews from "../../components/reviews";

import styles from "./SingleMoviePage.module.scss";

import axios from "axios";
import shortid from "shortid";

import { useFav } from "../../context/FavContextProvider";

export default function SingleMoviePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState({});
  const [favorite, setFavorite] = useState([]);
  const { getFav } = useFav();
  const API_KEY = process.env.REACT_APP_API_KEY;

  const handleGoBack = () => navigate(-1, { replace: true });

  useEffect(() => {
    const apiUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US&`;

    axios.get(apiUrl).then(async (response) => {
      const data = await response.data;
      setMovie(data);
    });
  }, []);

  const handleAddMovie = () => {
    setFavorite((prevState) => {
      if (prevState !== movie) {
        return [...prevState, favorite];
      }
    });
  };

  const genres = movie.genres?.map((item) => (
    <div key={shortid.generate()} className={styles.SinglePage__genres}>
      <p
        className={`${styles.SinglePage__list_item} ${styles.SinglePage__genres}`}
        key={shortid.generate()}
      >
        {item.name}
      </p>
    </div>
  ));

  return (
    <div className={styles.SinglePage}>
      <button className={styles.SinglePage__btn} onClick={handleGoBack}>
        Go Back
      </button>
      {movie && (
        <>
          <div className={`${styles.SinglePage__inner} ${styles.container}`}>
            <img
              className={styles.SinglePage__img}
              src={
                movie.poster_path &&
                `https://image.tmdb.org/t/p/w500${
                  movie.poster_path || movie.backdrop_path || imageDef
                }`
              }
              alt="img"
            />

            <ul className={styles.SinglePage__list}>
              <li className={styles.SinglePage__list_item}>
                <h1 className={styles.SinglePage__list_title}>{movie.title}</h1>
              </li>
              <li className={styles.SinglePage__list_item}>
                <h2 className={styles.SinglePage__list_subtitle}>User Score</h2>
                <p className={styles.SinglePage__text}>
                  {Math.round(movie.vote_average)}/10
                </p>
              </li>
              <li className={styles.SinglePage__list_item}>
                <h2 className={styles.SinglePage__list_subtitle}>Overview</h2>
                <p className={styles.SinglePage__list_text}>{movie.overview}</p>
              </li>
              <li className={styles.SinglePage__list_item}>
                <h2 className={styles.SinglePage__list_subtitle}>Genres</h2>
                {genres}
              </li>
              <li className={styles.SinglePage__list_item}>
                <Link className={styles.SinglePage__list_link} to="cast">
                  Cast
                </Link>
                <Link className={styles.SinglePage__list_link} to="reviews">
                  Reviews
                </Link>
                <BtnFavorites onClick={handleAddMovie} />
              </li>
            </ul>
          </div>
        </>
      )}

      <Routes>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
      </Routes>
    </div>
  );
}
