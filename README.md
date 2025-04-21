# 📚 BookFinder 📚
 
A sleek, fully‑typed **React + Vite + TypeScript** application for quickly discovering books via the OpenLibrary API. Users can search, highlight, and save their favourite titles – all wrapped in a snappy, theme‑aware UI.

---

## ✨ Key Features

| Category | Feature |
|----------|---------|
| 🔍 **Search** | Real‑time, debounced search by **title, author or subject** |
| 📄 **Results** | Book cover, title, authors & first‑publish year |
| ❤️ **Favorites** | Persist favourite books to **localStorage** (add / remove) |
| 💡 **ConditionalWrapper** | Re‑usable HOC that wraps children only when a `condition` prop is `true`. Used to *highlight* books in the demo |
| 🌙 **Light/Dark Mode** | 1‑click theme switcher stored in `localStorage` |
| 🔔 **Toasts** | Snack‑bar notifications – e.g. *“Added to favourites”* |
| 🎬 **Animations** | Fade‑in list items & silky button / card hover states |

---

## 🚀 Quick Start

```bash
# 1 · Clone
$ git clone https://github.com/RealGevorgian/BookFinder.git
$ cd bookfinder

# 2 · Install deps
$ npm install    # or pnpm i / yarn

# 3 · Run dev server
$ npm run dev
# ⇢ open http://localhost:5173
```

Build for production:

```bash
npm run build && npm run preview   # static preview @ 4173
```

---

## 📁 Project Structure

```
src/
├─ assets/                   # Static images / icons
├─ components/
│  ├─ ConditionalWrapper.tsx # <ConditionalWrapper /> HOC
│  ├─ Favorites.tsx          # Favourites list page
│  ├─ HighlightBox.tsx       # Div wrapper used in demo (bonus task)
│  ├─ SearchBar.tsx          # Search input & results
│  └─ WrapperDemo.tsx        # Small demo showcasing ConditionalWrapper
│
├─ features/
│  └─ services/
│     └─ openLibraryAPI.ts   # API calls (search endpoint)
│
├─ styles/
│  ├─ App.css                # Global styles + animations
│  └─ Favorites.css          # Scoped favourites styling
│
├─ types/
│  └─ Book.ts                # `Book` interface (with optional `highlight?`)
│
├─ utils/
│  ├─ debounce.ts            # Generic debounce helper
│  └─ favoritesStorage.ts    # CRUD helpers around localStorage
│
├─ App.tsx                   # Theme provider & routing stub
├─ main.tsx                  # ReactDOM root
└─ vite-env.d.ts             # Vite globals
```

---

## 🛠️  Tech Stack

- **React 18** · **TypeScript 5**
- **Vite** – ultra‑fast dev & HMR
- **OpenLibrary API** – `/search.json` endpoint
- **CSS Modules** + vanilla CSS animations
- **localStorage** persistence hooks

---

## 🤝 Contributing

1. Fork the repo & create a branch `feat/<name>`
2. `pnpm install` (or npm/yarn) and code away
3. Run `npm run lint` & `npm run build` before opening a PR ✨

---

## © License

MIT – do whatever you’d like, just keep the credits. ♥

> *“A reader lives a thousand lives before he dies…*
> *The man who never reads lives only one.”* — George R. Martin

