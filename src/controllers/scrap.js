const fetchAndStoreReviews = require('../database-controllers/fetchAndStoreReviews')

module.exports = (req, res) => {
  /* eslint-disable-next-line */
  console.info(new Date(), 'Fetching new reviews')

  return fetchAndStoreReviews()
    .then(responses => responses.length)
    .then(newReviewsCount => {
      /* eslint-disable-next-line */
      console.info(new Date(), newReviewsCount, 'new reviews')

      res.status(200).json({ newReviews: newReviewsCount })
    })
    .catch(error => {
      /* eslint-disable-next-line */
      console.error(error)

      return res.status(500).json(error)
    })
}
