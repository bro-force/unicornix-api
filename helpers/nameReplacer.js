const stringSimilarity = require('string-similarity')


const nameReplacer = (review) => {

  const commentSplit = review.comment.split(' ')
  const matches = stringSimilarity.findBestMatch(review.company, commentSplit)

  return matches.ratings.reduce((accumulator, currentValue) => {
    if (currentValue.rating >= 0.7) {
      currentValue.target = '____'
    }

    return `${accumulator} ${currentValue.target}`
  }, '')
}

module.exports = nameReplacer
