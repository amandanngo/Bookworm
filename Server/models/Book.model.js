const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true,
        enum: ['Fiction', 'Non-fiction', 'Science Fiction', 'History', 'Fantasy', 'Poetry', 'Romance', 'Biography', 'Other']
    },
    category: {
        type: String,
        required: true,
        enum: ['Planning-to-Read', 'Currently-Reading', 'Finished-Reading']
    }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;