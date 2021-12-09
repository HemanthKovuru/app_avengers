import React from "react";
import "./BookCard.scss";

const BookCard = ({ book }) => {
  return (
    <div className='bookcard'>
      <div className='bookcard-left'>
        <img src={book.imageUrl} alt='alt' />
        <div className='bookcard-left-info'>
          <h3>{book.title}</h3>
          <div>
            <b>By</b>: {book.author}
          </div>
          <div>
            <b>Publisher</b>: {book.publisher}
          </div>
          <div className='bookcard-left-info-bottom'>
            <div className='price-info'>
              <strike className='discount'>₹{book.price}</strike>{" "}
              <div className='price'>₹{book.offer}</div>
            </div>
            <div>
              <div>Binding &nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;Hardback</div>
              <div>Release &nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;17 Mar 2021</div>
              <div>Language&nbsp;: &nbsp;&nbsp;English</div>
            </div>
          </div>
        </div>
      </div>
      <div className='bookcard-right'>
        <div>
          <div className='bookcard-right-status'>Available</div>
          <div className='bookcard-right-info'>
            Ships within 1-2 Days Explain..
          </div>
          <div className='bookcard-right-info'>
            ₹39 shipping in India per item and low cost Worldwide
          </div>
        </div>
        <div style={{ marginBottom: "2rem" }}>
          <div
            style={{
              backgroundColor: "#b60a0a",
              color: "#fff",
              boxShadow: "none",
            }}
            className='btn-signin'>
            Buy Now
          </div>
          <div
            style={{
              backgroundColor: "#494949",
              color: "#fff",
              boxShadow: "none",
            }}
            className='btn-signin'>
            Add To Wisholist
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
