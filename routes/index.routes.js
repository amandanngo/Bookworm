const express = require('express');
const router = express.Router();

const Book = require("../models/book.model");

router.post('/books', (req,res,next) =>{
    const {name, title, genre, category} = req.body;

    Book.create({
        name,
        title,
        genre,
        category
    })
})