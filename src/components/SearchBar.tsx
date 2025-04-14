import { useEffect, useState } from "react";
import { fetchBooks } from "../features/services/openLibraryAPI";
import { Book } from "../types/Book";
import { debounce } from "../utils/debounce";

const SearchBar = () => {
    const [query, setQuery] = useState("");
    const [books, setBooks] = useState<Book[]>([]);
    const [favorites, setFavorites] = useState<Book[]>([]);
    const [toast, setToast] = useState("");

    const debouncedSearch = debounce(async (q: string) => {
        const result = await fetchBooks(q);
        setBooks(result);
    }, 400);

    useEffect(() => {
        if (query) debouncedSearch(query);
        else setBooks([]);
    }, [query]);

    useEffect(() => {
        const stored = localStorage.getItem("favorites");
        if (stored) setFavorites(JSON.parse(stored));
    }, []);

    const addToFavorites = (book: Book) => {
        const exists = favorites.some((b) => b.key === book.key);
        if (exists) return showToast("Already in favorites");

        const updated = [...favorites, book];
        setFavorites(updated);
        localStorage.setItem("favorites", JSON.stringify(updated));
        showToast("Book added to favorites");
    };

    const showToast = (msg: string) => {
        setToast(msg);
        setTimeout(() => setToast(""), 3000);
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search books..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />

            {toast && <div className="toast">{toast}</div>}

            <ul className="book-list">
                {books.map((book) => (
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
                            <button onClick={() => addToFavorites(book)}>❤️ Save</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SearchBar;
