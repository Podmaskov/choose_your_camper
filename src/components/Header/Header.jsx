import cx from "classnames";
import { NavLink } from "react-router-dom";

import styles from "./styles.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <NavLink
          className={({ isActive }) =>
            isActive ? cx([styles.link, styles.active]) : styles.link
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? cx([styles.link, styles.active]) : styles.link
          }
          to="/movies"
        >
          Movies
        </NavLink>
      </nav>
    </header>
  );
};
