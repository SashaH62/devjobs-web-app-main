import { NavLink } from "react-router-dom";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import styles from "./Header.module.scss";

function Header({ children }) {
  return (
    <header className={styles.header}>
      <nav>
        <NavLink to={"/"}>
          <h1>devjobs</h1>
        </NavLink>
        <ThemeToggle />
      </nav>
      <div className={styles.headerChildContainer}>{children}</div>
    </header>
  );
}

export default Header;
