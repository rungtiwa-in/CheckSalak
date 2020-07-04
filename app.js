const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const { intercepter } = require('./middleware/logMiddleware')
const salakRoute = require('./routes/salakRoute')

app.use(bodyParser.json())
app.use(intercepter)

app.use('/api/salak', salakRoute)

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
