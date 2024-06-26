const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    books: [{
        type: Schema.Types.ObjectId,
        ref: 'Book'
    }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;