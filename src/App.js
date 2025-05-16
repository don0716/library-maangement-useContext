import { BrowserRouter as Router, Routes, Route } from "react-router";
import { BookProvider } from "./contexts/BookContext";
import Books from "./pages/Books";
import AddBooks from "./pages/AddBooks";
import Header from "./components/Header";

function App() {
  return (
    <BookProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/addbooks" element={<AddBooks />} />
        </Routes>
      </Router>
    </BookProvider>
  );
}

export default App;
