# The Wardrobe Co

A modern, animated fashion e-commerce showcase built with **React**, **HTML**, **CSS**, and **JavaScript**. Four interactive pages with scroll animations, product filtering, and a polished boutique aesthetic.

## Live preview

Run locally with `npm run dev` and open [http://localhost:5173](http://localhost:5173).

## Features

- **Scroll animations** — Intersection Observer reveal effects on scroll
- **Interactive shop** — Category filters, sort (price/name), wishlist hearts, quick-add with toast
- **Hero gallery** — Floating fashion imagery with CSS keyframe animations
- **About page** — Tabbed values section and team grid with hover effects
- **Contact form** — Client-side validation and animated success state
- **Responsive design** — Mobile hamburger menu and adaptive layouts
- **Cursor glow** — Subtle desktop follow effect

## Tech stack

| Layer | Tools |
|-------|--------|
| UI | React 18, JSX |
| Routing | React Router v6 |
| Styling | CSS3 (custom properties, animations, Grid/Flexbox) |
| Build | Vite 5 |
| Images | Unsplash (remote URLs) |

## Project structure

```
src/
├── components/     # Navbar, Footer, ProductCard, CartToast, CursorGlow
├── pages/          # Home, Collection, About, Contact (+ page CSS)
├── hooks/          # useReveal — scroll-triggered animations
├── data/           # Product catalog & categories
├── styles/         # Global CSS variables & utilities
├── App.jsx         # Routes & layout
└── main.jsx        # Entry point
```


## Browser support

Modern browsers (Chrome, Firefox, Safari, Edge). Internet connection required for Unsplash product images.

## License

MIT — feel free to use this project for learning or portfolio purposes.

---

<img width="1895" height="871" alt="Screenshot" src="https://github.com/user-attachments/assets/9a307695-f597-47a0-a7e1-d98e8104ba83" />

