import "./assets/index.css";
import Nav from "./components/Nav";
import React, { useState, useEffect } from "react";
import Footer from "./components/Footer.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Books from "./pages/Books.jsx";
import BookInfo from "./pages/BookInfo.jsx";
import books from "./assets/data.js";
import Cart from "./pages/Cart.jsx";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    const dupeItem = cart.find((item) => item.id === book.id);
    if (dupeItem) {
      setCart(
        cart.map((item) =>
          item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...book, quantity: 1 }]);
    }
  }
  function changeQuantity(book, quantity) {
    setCart(
      cart.map((item) =>
        item.id === book.id
          ? {
              ...item,
              quantity: +quantity,
            }
          : item
      )
    );
  }
  function removeItem(item) {
    setCart(cart.filter((book) => book.id !== item.id));
  }
  function numberOfItems() {
    let counter = 0;
    cart.forEach((item) => {
      counter += item.quantity;
    });
    return counter;
  }

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <Router>
      <div className="App">
        <Nav numberOfItems={numberOfItems()} />
        <Route path="/" exact component={Home} />
        <Route path="/books" exact render={() => <Books books={books} />} />
        <Route
          path="/books/:id"
          render={() => <BookInfo books={books} addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          render={() => (
            <Cart
              cart={cart}
              changeQuantity={changeQuantity}
              removeItem={removeItem}
            />
          )}
        />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
