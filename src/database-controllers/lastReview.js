const db = require('../firebase')

const lastReview = () => {
  return db.ref(`reviews`).orderByKey().limitToLast(1).once('value')
    .then(snapshot => {
      if (!snapshot.val()) {
        return 0
      } else {
        const last = Object.keys(snapshot.val())[0]

        return last
      }
    })
}

module.exports = lastReview
