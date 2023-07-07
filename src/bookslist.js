import React from "react";

const BooksList = ({ book, removebook }) => {
  return (
    <>
      {book.map((list) => {
        const { id, name, author, image, price } = list;

        return (
          <article key={id} className="box">
            <div>
              <img src={image} alt="" />
              <h2>{name}</h2>
              <p>{author}</p>
              <h3>
                <span>{price}</span>
              </h3>
              <div>
                <button className="btn-1" onClick={() => removebook(id)}>
                  Remove
                </button>
              </div>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default BooksList;
