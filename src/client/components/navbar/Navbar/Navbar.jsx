import React from "react";
import { Link } from "react-router-dom";

import NavbarList from "../NavbarList";

import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <NavbarList />
    </header>
  );
}
