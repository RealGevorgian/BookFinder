import { useState } from "react";
import SearchBar from "./components/SearchBar";
import Favorites from "./components/Favorites";
import "./styles/App.css";

function App() {
    const [theme, setTheme] = useState<"light" | "dark">("dark");
    const [view, setView] = useState<"search" | "favorites">("search");

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    return (
        <div className={`app ${theme}`}>
            <header>
                <h1>📚 BookFinder 📚</h1>

                <div style={{ marginTop: "1rem" }}>
                    <button onClick={toggleTheme}>
                        {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
                    </button>

                    <button
                        onClick={() =>
                            setView((prev) =>
                                prev === "search" ? "favorites" : "search"
                            )
                        }
                        style={{ marginLeft: "10px" }}
                    >
                        {view === "search" ? "⭐ Show Favorites" : "🔍 Back to Search"}
                    </button>
                </div>
            </header>

            {view === "search" ? <SearchBar /> : <Favorites />}
        </div>
    );
}

export default App;
