import { Book } from "../types/Book";

const KEY = "bookfinder_favorites";

const loadRaw = (): Book[] => JSON.parse(localStorage.getItem(KEY) ?? "[]");
const saveRaw = (arr: Book[]) => localStorage.setItem(KEY, JSON.stringify(arr));

export const getFavoriteBooks = (): Book[] => loadRaw();

export const saveFavoriteBooks = (books: Book[]) => saveRaw(books);

export const removeFavoriteBook = (key: string): Book[] => {
    const remaining = loadRaw().filter((b) => b.key !== key);
    saveRaw(remaining);
    return remaining;
};

export const toggleHighlightFlag = (key: string): Book[] => {
    const updated = loadRaw().map<Book>((b) =>
        b.key === key ? { ...b, highlight: !b.highlight } : b
    );
    saveRaw(updated);
    return updated;
};
