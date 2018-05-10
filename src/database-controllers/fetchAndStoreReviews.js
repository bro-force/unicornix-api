const lastReview = require('./lastReview')
const saveReviews = require('./saveReviews')
const scrap = require('../scrap')

const fetchAndStoreReviews = () => {
  /* eslint-disable */
  console.log(new Date(), 'Fetching data from spreadsheet')

  return lastReview()
    .then(scrap)
    .then(saveReviews)
    .then(responses => console.log(new Date(), responses.length, 'new comments'))
    .catch(console.error)
  /* eslint-enable */
}

module.exports = fetchAndStoreReviews
