const express = require('express');
const router = express.Router();

const Book = require("../models/book.model");

router.post('/books', (req,res,next) =>{
    const {title, author, genre, category} = req.body;

    Book.create({
        title,
        author,
        genre,
        category
    })
        .then(newBook => {
            res.json({
                message: "POST /books",
                event: newEvent
            })

    
        })
        .catch(err =>{ res.json(err) })
})

module.exports = router;