// write the book component code here
import React from 'react'

const BookCard = ({book}) => {
    return (
        <div
          style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "15px",
            margin: "10px",
            width: "200px",
            textAlign: "center",
            boxShadow: "3px 3px 10px rgba(0,0,0,0.1)",
          }}
        >
          <img
            src={book.image}
            alt={book.name}
            style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "5px" }}
          />
          <h3>{book.name}</h3>
          <p><strong>Genre:</strong> {book.genre}</p>
          <p><strong>Author:</strong> {book.author}</p>
        </div>
      );
    };


const styles = {
    card: {
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "10px",
      margin: "10px",
      backgroundColor: "#f9f9f9",
      textAlign: "center",
    },
    title: { fontSize: "18px", fontWeight: "bold" },
    author: { color: "gray" },
    year: { fontStyle: "italic" },
  };

export default BookCard
