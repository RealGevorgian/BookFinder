import { Book } from "../../types/Book";

const BASE_URL = "https://openlibrary.org/search.json";

export async function fetchBooks(query: string): Promise<Book[]> {
    try {
        const response = await fetch(`${BASE_URL}?q=${encodeURIComponent(query)}`);
        const data = await response.json();

        return data.docs.map((doc: any) => ({
            key: doc.key,
            title: doc.title,
            author_name: doc.author_name,
            first_publish_year: doc.first_publish_year,
            cover_i: doc.cover_i
        }));
    } catch (error) {
        console.error("Failed to fetch books:", error);
        throw error;
    }
}
