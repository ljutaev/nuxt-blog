const express = require('express')
const bodyParser = require('body-parser')
const keys = require('./keys')
const mongoose = require('mongoose')
const app = express()

mongoose.connect(keys.MONGO_URI)
    .then(() => console.log('Mongo connect'))
    .catch(error => console.error('Error'))

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

module.exports = app