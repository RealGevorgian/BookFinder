# 📚 BookFinder 📚

BookFinder is a modern React + TypeScript application built with Vite. It allows users to search for books using the OpenLibrary API, save favorites, toggle between light and dark themes, and enjoy a clean UI with subtle animations.

---

##  Features

- 🔍 Search for books by title, author, or subject
- 📖 Display book cover, title, authors, and publish year
- 💬 Toast notifications for user feedback
- 🌗 Light/Dark mode toggle
- ❤️ Save favorites to localStorage
- ⚡ Debounced real-time search
- 🎨 Smooth animations and UI transitions

---

##  Getting Started

```bash
# Clone the repo
git clone https://github.com/your-username/bookfinder.git
cd bookfinder

# Install dependencies
npm install

# Run the app
npm run dev
```

Open your browser at: [http://localhost:5173](http://localhost:5173)

---

## 📁 Project Structure

```
src/
├── components/             # Reusable UI components
│   ├── Favorites.tsx       # Renders saved favorite books
│   └── SearchBar.tsx       # Search input + book list display
│
├── features/
│   └── services/
│       └── openLibraryAPI.ts  # Fetch books from OpenLibrary API
│
├── types/
│   └── Book.ts             # TypeScript interface for book object
│
├── utils/
│   └── debounce.ts         # Debounce function to delay input
│
├── styles/
│   └── App.css             # Global styles and animation
│
├── App.tsx                 # Main component with theme and page toggles
├── main.tsx                # React root rendering logic
└── index.html              # App container and mount root
```

---

##  Tech Stack

- ⚛️ React (with TypeScript)
- ⚡ Vite for fast development
- 🧠 OpenLibrary API for book data
- 💾 LocalStorage for favorites
- 🎨 Custom CSS for design and theming

---

##  Author

Developed with ❤️ by Gevorgyan Gevorg

> *"A reader lives a thousand lives before he dies... The man who never reads lives only one."* – George R.R. Martin

