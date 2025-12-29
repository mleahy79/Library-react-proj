import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useParams } from "react-router-dom";

const BookInfo = ({books}) => {
  const { id } = useParams();
  const book = books.find(book => +book.id === +id);

  return (
    <div id="book__body">
      <main id="book__main">
        <div className="book__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/books" className="book__link">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/books" className="book__link">
                <h2 className="book__selected--title--top">Books</h2>
              </Link>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img src={book.url} alt="" className="book__selected--img" />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">{book.title}</h2>
                <div className="book__selected--rating">
                  {new Array(Math.floor(book.rating)).fill(0).map((_, index) => (
                    <FontAwesomeIcon icon="star" key={index} />
                  ))}
                  {!Number.isInteger(book.rating) && (
                    <FontAwesomeIcon icon="star-half-alt" />
                  )}
                </div>
                <div className="book__selected--price">
                  {book.salePrice ? (
                    <>
                      <span className="book__price--normal">
                        ${book.originalPrice.toFixed(2)}
                      </span>
                      ${book.salePrice.toFixed(2)}
                    </>
                  ) : (
                    <>${book.originalPrice.toFixed(2)}</>
                  )}
                </div>
                <div className="book__summary">
                  <h3 className="book__summary--title">Summary</h3>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptate iusto facere quis beatae sed necessitatibus
                    suscipit distinctio ipsum quaerat esse.
                  </p>
                  <button className="btn">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookInfo;
