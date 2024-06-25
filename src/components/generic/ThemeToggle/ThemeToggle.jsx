import { useEffect, useState } from "react";
import { setTheme } from "../../../utils/ThemeToggleUtils";
import styles from "./ThemeToggle.module.scss";

function ThemeToggle() {
  const [themeState, setThemeState] = useState("light");

  useEffect(() => {
    if (localStorage.getItem("themeMode")) {
      setTheme(localStorage.getItem("themeMode"));
    }
  }, []);

  function handleToggleTheme() {
    if (themeState === "light") {
      setThemeState("dark");
      setTheme("dark");
    } else {
      setThemeState("light");
      setTheme("light");
    }
  }

  return (
    <div
      className={`${styles.themeToggleContainer} d-flex align-items-center col-gap-10`}
    >
      <img src="/assets/desktop/icon-sun.svg" alt="Light Mode" />
      <input
        type="checkbox"
        className={styles.checkbox}
        id="checkbox"
        onClick={handleToggleTheme}
      />
      <label htmlFor="checkbox" className={styles.checkboxLabel}>
        <span className={styles.ball}></span>
      </label>
      <img src="/assets/desktop/icon-moon.svg" alt="Dark Mode" />
    </div>
  );
}

export default ThemeToggle;
