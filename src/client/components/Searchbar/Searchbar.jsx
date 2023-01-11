import React from "react";
import { useState } from "react";

import styles from "./Searchbar.module.scss";

export default function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("all");
  const handleChange = ({ target }) => {
    setQuery(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(query, type);
    setQuery("");
  };

  const handleFilter = (e) => {
    setType(e.target.dataset.type);
    onSubmit(query, e.target.dataset.type);
  };

  return (
    <div className={styles.SearchBar}>
      <form className={styles.SearchBar__searchForm} onSubmit={handleSubmit}>
        <button
          type="submit"
          onClick={() => onSubmit(query, type)}
          className={styles.SearchBar__searchFormBtn}
        >
          <span className={styles.SearchBar__searchFormButtonLabel}>
            Search
          </span>
        </button>
        <input
          className={styles.SearchBar__searchFormInput}
          type="text"
          onChange={handleChange}
          value={query}
          placeholder="Search movies"
        />
      </form>
      <form className={styles.SearchBar__radioForm}>
        <label className={styles.SearchBar__label}>
          <input
            className={styles.SearchBar__radio_btn}
            type="radio"
            name="type"
            data-type="all"
            onChange={handleFilter}
            checked={type === "all"}
          />
          <span>All</span>
        </label>
        <label className={styles.SearchBar__label}>
          <input
            className={styles.SearchBar__radio_btn}
            type="radio"
            name="type"
            data-type="movie"
            onChange={handleFilter}
            checked={type === "movie"}
          />
          <span>Movies only</span>
        </label>
        <label className={styles.SearchBar__label}>
          <input
            className={styles.SearchBar__radio_btn}
            type="radio"
            name="type"
            data-type="tv"
            onChange={handleFilter}
            checked={type === "tv"}
          />
          <span>Series only</span>
        </label>
      </form>
    </div>
  );
}
