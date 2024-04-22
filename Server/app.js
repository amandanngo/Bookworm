require('dotenv/config')

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');

const { isAuthenticated } = require('./middlewares/jwt.middleware');

mongoose.connect(process.env.MONGODB_URI)
    .then(connectObject => {
        console.log(`connected to db ${connectObject.connections[0].name}`);
    })
    .catch(err => console.log(err));

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.use(cors({
    origin: [
      process.env.FRONTEND_URL
    ]
}))

const authRoutes = require('./routes/auth.routes');
app.use('/auth', authRoutes);

const bookRoutes = require("./routes/book.routes");
app.use("/api", isAuthenticated, bookRoutes);

module.exports = app;