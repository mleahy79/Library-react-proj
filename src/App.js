import "./assets/index.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer.jsx";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "./pages/Home.jsx";
import Books from "./pages/Books.jsx";
import BookInfo from "./pages/BookInfo.jsx";
import books from "./assets/data.js";



function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Route path="/" exact component={Home} />
      <Route path="/books" exact render={() => <Books books={books} />} />
      <Route path="/books/:id" render={() => <BookInfo books={books} />} />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
