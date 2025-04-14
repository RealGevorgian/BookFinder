import { useEffect, useState } from "react";
import { Book } from "../types/Book";

const Favorites = () => {
    const [favorites, setFavorites] = useState<Book[]>([]);

    useEffect(() => {
        const stored = localStorage.getItem("favorites");
        if (stored) {
            setFavorites(JSON.parse(stored));
        }
    }, []);

    const removeFavorite = (bookKey: string) => {
        const updated = favorites.filter((book) => book.key !== bookKey);
        setFavorites(updated);
        localStorage.setItem("favorites", JSON.stringify(updated));
    };

    if (favorites.length === 0) {
        return <p style={{ textAlign: "center" }}>No favorite books added yet.</p>;
    }

    return (
        <div className="favorites">
            <h2 style={{ textAlign: "center" }}>❤️ Favorite Books</h2>
            <ul className="book-list">
                {favorites.map((book) => (
                    <li key={book.key} className="book-card">
                        <div className="cover">
                            {book.cover_i ? (
                                <img
                                    src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                                    alt="cover"
                                />
                            ) : (
                                <div className="no-cover">No Cover</div>
                            )}
                        </div>
                        <div className="info">
                            <strong>{book.title}</strong>
                            <div>{book.author_name?.join(", ")}</div>
                            <div>{book.first_publish_year}</div>
                            <button onClick={() => removeFavorite(book.key)}>
                                ❌ Remove
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Favorites;
