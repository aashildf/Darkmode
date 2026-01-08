import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import ToggleThemeButton from "./ToggleThemeButton";
import { Sun, Moon } from "lucide-react";

const MainSection = () => {
    const {theme}= useContext(ThemeContext);

    return (
      <main className="bento-grid">
        {/* boks 1 - stor med animert kant*/}
        <div className="status-card card">
          <span className="badge">MODE</span>
          <div className="bug bug-1">🪲</div>
          <div className="bug bug-2">🪳</div>
          <div className="bug bug-3">🐜</div>
          <h1>
            {theme === "light"
              ? "Du bruker nå light mode!"
              : "Du bruker nå dark mode!"}
          </h1>
          <div className="line-decoration "></div>
        </div>

        {/* boks 2 - ikon  med animert kant*/}
        <div className="icon-card card">
          <span className="big-icon">
            {theme === "light" ? (
              <Sun size={64} color="#f59e0b" strokeWidth={1.5} />
            ) : (
              <Moon size={64} color="#6366f1" strokeWidth={1.5} />
            )}
          </span>
        </div>

        {/* boks 3- vitsen */}
        <div className="joke-card card">
          <p className="quote">"Why do programmers prefer darkmode?"</p>
          <p className="punchline">Because light attracts bugs.</p>
        </div>

        {/* boks 4 - knapp */}
        <div className="button-card card">
          <ToggleThemeButton />
        </div>
      </main>
    );
};

export default MainSection;