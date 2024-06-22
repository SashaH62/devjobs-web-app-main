import { useEffect, useState } from "react";
import { setTheme } from "../../../utils/ThemeToggleUtils";

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

  return <button onClick={handleToggleTheme}>{themeState}</button>;
}

export default ThemeToggle;
