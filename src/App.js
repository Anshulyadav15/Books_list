import React, { useState } from "react";
import data from "./books_data.json";
import BooksList from "./bookslist";
import "./App.css";

function App() {
  const [book, setbook] = useState(data);

  const removebook = (id) => {
    const newbook = book.filter((remove) => remove.id !== id);
    setbook(newbook);
  };

  return (
    <section>
      <div className="main">
        <h1>Top {book.length} best seller books</h1>
        <div className="container">
          <BooksList book={book} removebook={removebook} />
        </div>
        <div className="btnc">
          {book.length>0 && <button className="btn" onClick={() => setbook([])}>
            Remove All
          </button>}
        </div>
      </div>
    </section>
  );
}

export default App;
