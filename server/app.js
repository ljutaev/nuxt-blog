const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const authRoutes = require('./routes/auth.routes')
const keys = require('./keys')
const app = express()

mongoose.connect(keys.MONGO_URI)
    .then(() => console.log('Mongo connect'))
    .catch(error => console.error('Error'))
// mongoose.set('useCreateIndex', true);
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/api/auth', authRoutes)

module.exports = app