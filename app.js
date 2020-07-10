const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const { intercepter } = require('./middleware/logMiddleware')
const salakRoute = require('./routes/salakRoute')

app.use(express.json())
app.use(intercepter)

mongoose.connect('mongodb://127.0.0.1:27017/CheckSalakDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    serverSelectionTimeoutMS: 5000
})

app.use('/api/salak', salakRoute)

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
