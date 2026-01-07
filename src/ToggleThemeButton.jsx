import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

const ToggleThemeButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

const buttonStyle = {
  backgroundColor:"var(--btn-bg)",
  color:"var(--btn-text)",
  padding:"10px 20px",
  border:"none",
  borderRadius: "30px",
  cursor:"pointer",
  fontSize: "1rem",
  fontWeight: "bold",
  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
  transition: "transform 0.2s active"
};
  

  return (
    <button
     onClick={toggleTheme} 
     style={buttonStyle}
     onMouseEnter={(e) => e.targey.style.opacity = "0.9"}
     onMouseLeave={(e) => e.target.style.opacity = "1"}
     className="toggle-btn">
     {theme === "light" ?  "switch to Dark Mode" : "Switch to Light Mode"}
    </button>
  );
};

export default ToggleThemeButton;
