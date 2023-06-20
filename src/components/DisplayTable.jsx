import {React, useEffect, useState} from 'react'
import '../css/DisplayTable.css';
import Form from './Form';
import Modal from '../components/Modal';

const DisplayTable = () => {
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredBooks, setFilteredBooks] = useState([]);
    
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedBookIndex, setSelectedBookIndex] = useState(null);

    const openModal = (index) => {
      setSelectedBookIndex(index);
      setModalOpen(true);
    };

    const closeModal = () => {
      setModalOpen(false);
      setSelectedBookIndex(null);
    };

    useEffect(() => {
        const storedBooks = localStorage.getItem('books');
        const books = storedBooks ? JSON.parse(storedBooks) : [];
        setBooks(books);
        setFilteredBooks(books);
    }, []);

    const handleSearch = (e) => {
        const searchTerm = e.target.value;
        setSearchTerm(searchTerm);

        const filteredBooks = books.filter((book) => {
          const bookTitle = book.title.toLowerCase();
          const bookAuthor = book.author.toLowerCase();
          const searchTermLower = searchTerm.toLowerCase();

          return bookTitle.includes(searchTermLower) || bookAuthor.includes(searchTermLower);
        });
      setFilteredBooks(filteredBooks);
    };

    return (
        <>
          <input type="text" id='search' value={searchTerm} onChange={handleSearch} placeholder="Search by Title / Author Name" />
          <div className='container'>
            {filteredBooks.map((book, index) => (
              <div key={index} className='card'>
                <p><span style={{ fontWeight: 'bold' }}>Title:</span> <span id='title'>{book.title}</span></p>
                <p><span style={{ fontWeight: 'bold' }}>Author Name:</span> <span id='author'>{book.author}</span></p>
                <p><span style={{ fontWeight: 'bold' }}>Price:</span> <span id='amount'>{book.amount}</span></p>
                <button onClick={() => openModal(index)}>Edit</button>
              </div>
            ))}
            {isModalOpen && <Modal isOpen={isModalOpen} closeModal={closeModal} bookIndex={selectedBookIndex} book={filteredBooks[selectedBookIndex]} customComponent={<Form />}/>}
          </div>
        </>
    )
}

export default DisplayTable