require('dotenv').config()

const express = require('express');
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
  
app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT)
})