const fetchAndStoreReviews = require('../database-controllers/fetchAndStoreReviews')

module.exports = (req, res) => {
  console.log(new Date(), 'Fetching new reviews')

  return fetchAndStoreReviews()
    .then(responses => responses.length)
    .then(newReviewsCount => {
      console.log(new Date(), newReviewsCount, 'new reviews')

      res.status(200).json({ newReviews: newReviewsCount })
    })
    .catch(error => {
      return res.status(500).json(error)
    })
}
