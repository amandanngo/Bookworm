const express = require('express');
const router = express.Router();

const Book = require("../models/Book.model");
const User = require('../models/User.model')


router.post('/books', (req,res,next) =>{
    const {title, author, genre, category} = req.body;

    const {_id} = req.payload;

    console.log(_id);

    Book.create({
        title,
        author,
        genre,
        category
    })
        .then(newBook => {
            res.json({
                message: "POST /books",
                book: newBook
            })

            return User.findByIdAndUpdate(_id, {
                $push: {books: newBook._id}
            },{
                new: true
            });

        })
        .then(updatedUser => {
            console.log('updated user books')
        })
        .catch(err =>{ res.json(err) })
})

router.get('/books/:category', (req, res) => {
    const {_id } = req.payload;
    const category = req.params.category;

    console.log(category);

    User.findById(_id)
        .populate({
            path: 'books',
            match: {category: category}
        })
        .then(foundUser =>{
            return foundUser.books;
        })
        .then(userBooks =>{
            res.json({books: userBooks})
        })
        .catch(err => res.json(err))
});

router.post('/books/:bookId/edit-category', (req, res) => {
    const { category } = req.body;
    const bookId = req.params.bookId;

    Book.findByIdAndUpdate(bookId, { category }, { new: true })
        .then(updatedBook => {
            if (!updatedBook) {
                return res.status(404).json({ error: "Book not found" });
            }
            res.json({
                message: "Book category updated successfully",
                updatedBook
            });
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });
});

router.delete('/books/:bookId', (req, res) => {
    const bookId = req.params.bookId;

    Book.findByIdAndDelete(bookId)
        .then(deletedBook => {
            if (!deletedBook) {
                return res.status(404).json({ error: "Book not found" });
            }
            // Remove book reference from user's books array
            return User.updateOne({}, { $pull: { books: bookId } });
        })
        .then(() => {
            res.json({ message: "Book deleted successfully" });
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });
});

module.exports = router;