const db = require('../firebase')

const saveReviews = (reviews) => {
  const promises = reviews.map(review => {
    return db.ref(`reviews/${review.line}`).set(review)
  })

  return Promise.all(promises)
}

module.exports = saveReviews
