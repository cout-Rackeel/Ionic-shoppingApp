require('dotenv').config({path:'.env'})
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

const PORT = process.env.PORT || 8080

app.use(cors(['*']))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routers
const shoppingList = require('./routes/shopping.routes')

// Routes
app.use('/api/v1/', shoppingList)

// Start Express App
mongoose.connect(process.env.MONGODB_URI, (err) => {
    if (err) throw err
    console.log('MongoDB Connected Successfully!')

    app.listen(PORT, () => {
        console.log(`Sever listening on http://localhost:${PORT}`)
    })
})
