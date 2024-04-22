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

module.exports = router;