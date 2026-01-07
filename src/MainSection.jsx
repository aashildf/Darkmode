import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import ToggleThemeButton from "./ToggleThemeButton";

const MainSection = () => {
    const {theme}= useContext(ThemeContext);

    return(
        <main className="container">
            <h1>
                {theme === "light" ? "Du bruker nå light mode!" : "Du bruker nå dark mode!"}
            </h1>
            <p style= {{ marginBottom: "2rem", fontSize: "1.2rem"}}>"Why do programmers prefer darkmode? Because light attracts bugs"</p>
            <ToggleThemeButton />
        </main>
    );
};

export default MainSection;