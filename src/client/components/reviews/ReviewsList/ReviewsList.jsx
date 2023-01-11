import React from "react";
import { useEffect, useState } from "react";

import axios from "axios";
import { useParams } from "react-router-dom";

import styles from "./ReviewsList.module.scss";

import ReviewsItem from "../ReviewsItem";

export default function Reviews() {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const API_KEY = process.env.REACT_APP_API_KEY;
  useEffect(() => {
    const apiReviews = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`;
    axios.get(apiReviews).then(async (response) => {
      const data = await response.data;
      const { results } = data;
      setReviews(results);
    });
  });

  return (
    <div className={`${styles.Reviews} ${styles.container}`}>
      {reviews && (
        <>
          <ul className={styles.Reviews__list}>
            {reviews.map((item) => (
              <ReviewsItem key={item.id} {...item} />
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
