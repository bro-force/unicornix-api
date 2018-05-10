const express = require('express')
const dotenv = require('dotenv').config()

const fetchAndStoreReviews = require('./database-controllers/fetchAndStoreReviews')

const app = express()

const port = process.env.PORT || 3000
const minute = 1000 * 60

app.listen(port, () => {
  console.log(`Unicornix is running at port ${port}`)

  fetchAndStoreReviews()
  setInterval(fetchAndStoreReviews, 1 * minute)
})
