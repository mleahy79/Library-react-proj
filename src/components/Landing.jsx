import React from 'react'
import UndrawBooks from '../assets/Undraw_Books.svg';

const Landing = () => {
  return (
    <section id="landing">
        <header>
            <div className="hearder__container">
                <div className="header__description">
                    <h1>America's most awarded library platform </h1>
                    <h2>Find your dreaam book with <span className="purple">Library</span></h2>
                    <a href="#features">
                        <button className="btn">Browse Books</button>
                    </a>
                </div>
                <figure className="header__img--wrapper">
                    <img src={ UndrawBooks } alt="header img" />
                </figure>

            </div>
        </header>


    </section>
      
  )
}

export default Landing
