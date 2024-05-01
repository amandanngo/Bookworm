import { useEffect, useState } from 'react';

import axios from 'axios'

function BookList({view}){

    const [books, setBooks] = useState([]);

    const getBooks = () =>{
        const storedToken = localStorage.getItem('authToken');

        axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/books/${view}`,{
            headers: {
                Authorization: `Bearer ${storedToken}`
            }
        })
            .then(res =>{
                setBooks(res.data.books);
            })
            .catch(err => console.log(err))
    }

    useEffect(()=>{
        getBooks();
    },[view])

    const editBook = (id,category) =>{
        const storedToken = localStorage.getItem('authToken');

        console.log(`BOOK ID: ${id}`);

        axios.put(`${process.env.REACT_APP_BACKEND_URL}/api/books/${id}/edit-category`, {
            category: category
        },{
            headers: {
                Authorization: `Bearer ${storedToken}`
            }
       
        })
            .then(res => {
                console.log("Edited book")
            })
            .catch(err => console.log(err))
    };

    return(
        <div id='book-list'>
            {books.map((book) => {
                return(
                    <div className='book-item' key={book._id}>
                        <p>Title: {book.title}</p>
                        <p>Author: {book.author}</p>
                        <p>Genre: {book.genre}</p>
                        <form>
                            <select 
                                name="category"
                            >
                                <option value="">Select Category</option>
                                <option value="Planning-to-Read">Planning to Read</option>
                                <option value="Currently-Reading">Currently Reading</option>
                                <option value="Finished-Reading">Finished Reading</option>
                            </select>
                            <button onClick={() =>{
                                editBook(book._id,book.category)
                            }}>Edit</button>
                        </form>
                        <button>Delete</button>
                    </div>
                )
            })}
        </div>
    ) 
}

export default BookList;