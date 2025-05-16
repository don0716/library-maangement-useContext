# Library Management App - useContext

A React-based book library app built using useContext, routing, filtering, and persistent storage using localStorage.

---

##  Product Requirements Document (PRD) Checklist

###  Global State

- [x] `useContext` used to create a `BookContext`.
- [x] Global state includes: `books`, `setBooks`, `toggleStatus`, `deleteBooks`.

---

###  Add Books

- [x] Form allows input for:
  - [x] Title
  - [x] Author
  - [x] Status (Read/Unread)
- [x] Book is added to global state with a unique `id`.

---

###  View Books

- [x] All books displayed in Books page.
- [x] Each book displays:
  - [x] Title
  - [x] Author
  - [x] Status (Read/Unread)

---

###  Mark as Read/Unread

- [x] Toggle button provided on each book card.
- [x] Button updates `isRead` property in global state.

---

###  Delete Books

- [x] Delete button available for each book.
- [x] Book is removed from the global state.

---

###  Filter Books

- [x] Three filter buttons implemented:
  - [x] All Books (with count)
  - [x] Read Books (with count)
  - [x] Unread Books (with count)
- [x] Filter logic updates displayed list accordingly.

---

###  Navigation

- [x] React Router used for routing.
- [x] Two main routes:
  - [x] `/books` → All Books Page
  - [x] `/add-book` → Add Book Page

---

###  Data Persistence (localStorage)

- [x] Books are saved to `localStorage` on any change.
- [x] Books are loaded from `localStorage` on initial load.
- [x] App maintains state even after refresh or browser close.

---

##  Tech Stack

- React
- React Router
- useContext + useState
- Bootstrap (for styling)
- localStorage API

---
