import React, { useEffect } from "react";
import CategElems from "../CategElems";
import CategoriesItem from "../CategoriesItem";
import styles from "./CategoriesList.module.scss";
import axios from "axios";
const CategoriesList = ({ getCategoryId }) => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  useEffect(() => {
    const fetchGenres = async () => {
      const apiUrl = `
      https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`;
      try {
        await axios.get(apiUrl).then((res) => console.log(res));
      } catch (error) {
        console.log("Smth wrong with api get genres" + error);
      }
    };
    fetchGenres();
  }, []);

  const categElem = CategElems.map((item) => (
    <CategoriesItem key={item.id} {...item} getCategoryId={getCategoryId} />
  ));
  return <ul className={styles.list}>{categElem}</ul>;
};

export default CategoriesList;
