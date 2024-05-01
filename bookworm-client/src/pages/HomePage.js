import React, { useState } from 'react';

function HomePage(){
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState('');
    const [category, setCategory] = useState('');

    const handleAddBook = () => {
        console.log("Adding book:", { title, author, genre, category }); 
        setTitle('');
        setAuthor('');
        setGenre('');
        setCategory('');
    };
    return(
        <div>
            <h1>Book Worm</h1>
            <h2>Add Book</h2>
            <input  
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => SVGTextPositioningElement(e.target.value)}
                />
            <input
                type="text"
                placeholder="Author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                />
                <input
                type="text"
                placeholder="Genre"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                />
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="">Select Category</option>
                    <option value="planning">Planning to Read</option>
                    <option value="reading">Currently Reading</option>
                    <option value="finished">Finished Reading</option>
                </select>
                <button onClick={handleAddBook}>Add Book</button>
                <div>
                <h2>Categories</h2>
                <button>Planning to Read</button>
                <button>Currently Reading</button>
                <button>Finished Reading</button>
            </div>
        </div>
            
    )
}

export default HomePage;