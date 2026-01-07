
/* eslint-disable react-refresh/only-export-components */

import { createContext, useState, useEffect} from "react";

export const  ThemeContext = createContext(); 

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // legge til/fjerne klassen på body
  useEffect(()=>{
  if (theme ==="dark") {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
 }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
