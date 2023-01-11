import React from "react";
import { Link } from "react-router-dom";

import imageDef from "../../../../image/default_image.png";

import styles from "./MovieItem.module.scss";

export default function MovieItem({
  poster_path,
  backdrop_path,
  title,
  vote_average,
  id,
  name,
}) {
  return (
    <li className={styles.MovieItem}>
      <Link to={`/movies/${id}`}>
        <img
          className={styles.MovieItem__img}
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path || backdrop_path}`
              : imageDef
          }
          alt="img"
        />
        <div className={styles.MovieItem__wrapper}>
          <h1 className={styles.MovieItem__title}>{title || name}</h1>
          <p className={styles.MovieItem__rating}>
            User Score: {Math.round(vote_average)}/10
          </p>
        </div>
      </Link>
    </li>
  );
}
