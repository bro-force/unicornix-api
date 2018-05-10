const lastReview = require('./lastReview')
const saveReviews = require('./saveReviews')
const scrap = require('../scrap')

const fetchAndStoreReviews = () => {
  return lastReview()
    .then(scrap)
    .then(saveReviews)
}

module.exports = fetchAndStoreReviews
