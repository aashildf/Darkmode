import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import ToggleThemeButton from "./ToggleThemeButton";

const MainSection = () => {
    const {theme}= useContext(ThemeContext);

    return (
      <main className="bento-grid">
        {/* boks 1 - stor*/}
        <div className="glass-card status-card">
          <span className="badge">MODE</span>
          <h1>
            {theme === "light"
              ? "Du bruker nå light mode!"
              : "Du bruker nå dark mode!"}
          </h1>
          <div className="line-decoration"></div>
          </div>

        {/* boks 2 - ikon */}
        <div className="glass-card icon-card">
            <span className="big-icon">{theme === "light" ? "☀️" : "🌙"}</span>
        </div>

                {/* boks 3- vitsen */}
          <div className="glass-card joke-card">
            <p className="quote">"Why do programmers prefer darkmode?"</p>
            <p className="punchline">Because light attracts bugs.</p>
          </div>

          {/* boks 4 - knapp */}
                <div className="glass-card button-card">
          <ToggleThemeButton />
        </div>
      </main>
    );
};

export default MainSection;