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
  const [videos, setvideos] = useState([]);
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

  useEffect(() => {
    try {
      const fetchVideo = async () => {
        let videoAPI = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`;
        await axios.get(videoAPI).then((res) => {
          setvideos(res.data.results);
          console.log(res);
        });
      };

      fetchVideo();
    } catch (error) {
      console.log(error);
    }
  }, []);

  // const handleAddMovie = () => {
  //   setFavorite((prevState) => {
  //     if (prevState !== movie) {
  //       return [...prevState, favorite];
  //     }
  //   });
  // };

  //Map Genres
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
  const {
    poster_path,
    backdrop_path,
    title,
    vote_count,
    overview,
    vote_average,
  } = movie;
  const filmTrailer = videos.map((video) => video.key);
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
                poster_path &&
                `https://image.tmdb.org/t/p/w500${
                  poster_path || backdrop_path || imageDef
                }`
              }
              alt="img"
            />

            <ul className={styles.SinglePage__list}>
              <li className={styles.SinglePage__list_item}>
                <h1 className={styles.SinglePage__list_title}>{title}</h1>
              </li>
              <li className={styles.SinglePage__list_item}>
                <h2 className={styles.SinglePage__list_subtitle}>Vote/votes</h2>
                <span className={styles.SinglePage__text}>
                  <span>{vote_average}</span>/ <span>{vote_count}</span>
                </span>
              </li>
              <li className={styles.SinglePage__list_item}>
                <h2 className={styles.SinglePage__list_subtitle}>Overview</h2>
                <p className={styles.SinglePage__list_text}>{overview}</p>
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
              </li>
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${
                  filmTrailer[filmTrailer.length - 1]
                }`}
                frameborder="0"
                allowfullscreen
              ></iframe>
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

// function murkupTrailer({ videos }) {
//   let markup = `<iframe
//   width="560"
//   height="315"
//   src="https://www.youtube.com/embed/${filmTrailer[filmTrailer.length - 1]}"
//   frameborder="0"
//   allowfullscreen
//   ></iframe>`;

//   return markup;
// }
