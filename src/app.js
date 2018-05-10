const express = require('express')
const dotenv = require('dotenv').config()

const scrap = require('./controllers/scrap')

const app = express()

app.get('/scrap', scrap)

const port = process.env.PORT || 3000
const minute = 1000 * 60

app.listen(port, () => {
  console.log(`Unicornix is running at port ${port}`)
})
