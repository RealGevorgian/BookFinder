import { useEffect, useState } from "react";
import { Book } from "../types/Book";

import {
    getFavoriteBooks,
    removeFavoriteBook,
    toggleHighlightFlag,
} from "../utils/favoritesStorage";

import ConditionalWrapper from "./ConditionalWrapper";
import HighlightBox from "./HighlightBox";

import "./Favorites.css";

export default function Favorites() {
    const [favorites, setFavorites] = useState<Book[]>([]);


    useEffect(() => {
        setFavorites(getFavoriteBooks());
    }, []);

    const handleRemove = (key: string) =>
        setFavorites(removeFavoriteBook(key));

    const handleToggleHighlight = (key: string) =>
        setFavorites(toggleHighlightFlag(key));

    const renderBook = (bk: Book) => (
        <ConditionalWrapper
            key={bk.key}
            condition={!!bk.highlight}
            wrapper={(children) => <HighlightBox>{children}</HighlightBox>}
        >
            <li className="fav-item">
                <div className="fav-info">
                    <strong>{bk.title}</strong>
                    {bk.author_name?.length && (
                        <span className="authors"> — {bk.author_name.join(", ")}</span>
                    )}
                </div>

                <div className="fav-actions">
                    <button
                        className="toggle-btn"
                        onClick={() => handleToggleHighlight(bk.key)}
                    >
                        {bk.highlight ? "Un‑highlight" : "Highlight"}
                    </button>

                    <button
                        className="remove-btn"
                        onClick={() => handleRemove(bk.key)}
                    >
                        × Remove
                    </button>
                </div>
            </li>
        </ConditionalWrapper>
    );

    return (
        <section className="favorites-section">
            <h2>Favourite Books ({favorites.length})</h2>

            {favorites.length === 0 ? (
                <p className="empty-msg">You haven’t saved any books yet.</p>
            ) : (
                <ul className="fav-list">{favorites.map(renderBook)}</ul>
            )}
        </section>
    );
}
