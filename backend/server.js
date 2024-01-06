require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const workoutRoute = require("./routes/workout")

const app = express();

app.use(express.json())

// middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/workouts', workoutRoute);

//connect DB
mongoose.connect(process.env.URI)
        .then(() => {
            console.log('listening on port', process.env.PORT)
        })
        .catch((error) => {
            console.log(error)
        })
  
app.listen(process.env.PORT)