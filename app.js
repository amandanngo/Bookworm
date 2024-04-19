require('dotenv/config')

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

mongoose.connect(process.env.MONGODB_URI)
    .then(connectObject => {
        console.log(`connected to db ${connectObject.connections[0].name}`);
    })
    .catch(err => console.log(err));

app.use(express.json());
app.use(morgan('dev'));

app.use(cors({
    origin: [
      process.env.FRONTEND_URL
    ]
}))

const index = require("./routes/index.routes");
app.use("/", index);

module.exports = app;