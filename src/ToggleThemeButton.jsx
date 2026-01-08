import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

const ToggleThemeButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);


  return (
    <button className="theme-btn" onClick={toggleTheme}>
      Bytt til {theme === "light" ? "Dark Mode" : "Light Mode"}
    </button>
  );
};

export default ToggleThemeButton;
