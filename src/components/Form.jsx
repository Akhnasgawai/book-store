import React, { useState, useEffect, useRef } from "react";
import "../css/Form.css";
import { useNavigate } from "react-router-dom";

const Form = (props) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [amount, setAmount] = useState("");
  const navigate = useNavigate();
  const bookTitle = useRef(null);
  const bookAuthor = useRef(null);
  const bookAmount = useRef(null);

  useEffect(() => {
    if (props.book) {
      setTitle(props.book.title || "");
      setAuthor(props.book.author || "");
      setAmount(props.book.amount || "");
    }
  }, [props.book]);

  const handleSubmit = (e) => {
    const functionMap = {
      add: addBooks,
      update: updateBooks,
      // Add more mappings as needed
    };

    // Call the corresponding function based on the btnName value
    if (functionMap.hasOwnProperty(props.btnName)) {
      const selectedFunction = functionMap[props.btnName];
      console.log(selectedFunction);
      selectedFunction(e);
    }
  };

  const getBooksFromLocalStorage = () => {
    const storedBooks = localStorage.getItem("books");
    return storedBooks ? JSON.parse(storedBooks) : [];
  };

  const addBooks = (e) => {
    e.preventDefault();

    const newBook = {
      title: title,
      author: author,
      amount: amount,
    };
    if (title !== "" || author !== "" || amount !== "") {
      const books = getBooksFromLocalStorage();
      books.push(newBook);
      localStorage.setItem("books", JSON.stringify(books));

      books.push(newBook);

      setTitle("");
      setAuthor("");
      setAmount("");
      navigate("/");
    } else {
      alert("Fields Cannot be Empty");
    }
  };

  const updateBooks = (e) => {
    // e.preventDefault();
    const updatedBook = {
      title: title,
      author: author,
      amount: amount,
    };
    if (title !== "" || author !== "" || amount !== "") {
      const books = getBooksFromLocalStorage();
      if (props.id >= 0 && props.id < books.length) {
        books[props.id] = updatedBook;
        localStorage.setItem("books", JSON.stringify(books));
      }
    } else {
      alert("Fields Cannot be Empty");
    }
  };

  return (
    <>
      <div className="book">
        <h1>{props.formHeading}</h1>
        <form onSubmit={handleSubmit}>
          <div className="book-title">
            <input
              ref={bookTitle}
              id="bookTitle"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
            />
          </div>
          <div className="book-author">
            <input
              ref={bookAuthor}
              id="bookAuthor"
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Author"
            />
          </div>
          <div className="book-price">
            <input
              ref={bookAmount}
              id="bookPrice"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Price"
            />
          </div>
          <input value={props.btnName} type="submit" />
        </form>
      </div>
    </>
  );
};

export default Form;
