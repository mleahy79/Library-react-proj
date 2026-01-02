import React from "react";
import EmptyCart from "../assets/empty_cart.svg";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Cart = ({ cart, changeQuantity, removeItem }) => {
  const subtotal = cart.reduce((total, item) => {
    return total + (item.salePrice || item.originalPrice) * item.quantity;
  }, 0);

  return (
    <div className="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/books" className="book__link">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/books" className="book__link">
                <h2 className="book__selected--title--top">Books</h2>
              </Link>
            </div>
            <div className="cart">
              <div className="cart__header">
                <span className="cart__book"></span>
                <span className="cart__quantity">Quantity</span>
                <span className="cart__total">Price</span>
              </div>
              <div className="cart__body">
                {cart.map((item) => (
                  <div className="cart__item" key={item.id}>
                    <div className="cart__book">
                      <img src={item.url} className="cart__book--img" alt="" />
                      <div className="cart__book--info">
                        <span className="cart__book--title">{item.title}</span>
                        <span className="cart__book--price">
                          ${(item.salePrice || item.originalPrice).toFixed(2)}
                        </span>
                        <button
                          className="cart__book--remove"
                          onClick={() => removeItem(item)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                    <div className="cart__quantity">
                      <input
                        type="number"
                        min={0}
                        max={99}
                        className="cart__input"
                        value={item.quantity}
                        onChange={(event) =>
                          changeQuantity(item, event.target.value)
                        }
                      />
                    </div>
                    <div className="cart__total">
                      $
                      {(
                        (item.salePrice || item.originalPrice) * item.quantity
                      ).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
              {cart.length === 0 && (
                <div className="cart__empty">
                  <img src={EmptyCart} alt="" className="cart__empty--img" />
                  <h2>Your cart is empty</h2>
                  <p>Looks like you haven't added anything to your cart yet</p>
                  <Link to="/books">
                    <button className="btn">Continue Shopping</button>
                  </Link> 
                </div>
              )}
              </div>
            </div>
            <div className="total">
              <div className="total__item total__sub-total">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="total__item total__tax">
                <span>Tax</span>
                <span>${(subtotal * 0.1).toFixed(2)}</span>
              </div>
              <div className="total__item total__price">
                <span>Total</span>
                <span>${(subtotal + subtotal * 0.1).toFixed(2)}</span>
              </div>
              <button className="btn btn__checkout">Proceed to Checkout</button>
            </div>
          </div>
      </main>
    </div>
  );
};

export default Cart;
