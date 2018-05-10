const axios = require('axios')
const cheerio = require('cheerio')

const spreadsheetUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQF0qr21v5Hw8C0rHGxkVcI-dgeXFoOWLjv0DwoKyvgSVPrEH-uZg7Csa48i35oUZL8pTvI0UgykTyC/pubhtml'

const getSpreadsheet = () => axios.get(spreadsheetUrl)

const getData = (start = 0) => (response) => {
  const $ = cheerio.load(response.data)
  const reviews = []

  $('#sheets-viewport table > tbody tr').each((i, element) => {
    const line = Number($(element).children().eq(0).text())
    const date = $(element).children().eq(1).text()
    const company = $(element).children().eq(2).text()
    const city = $(element).children().eq(4).text()
    const comment = $(element).children().eq(5).text()

    const review = {
      line,
      date,
      city,
      company,
      comment
    }

    const isValid =
      review.date !== '' &&
      review.city !== '' &&
      review.company !== '' &&
      review.comment !== ''

    if (isValid && review.line > start) {
      reviews.push(review)
    }
  })

  return reviews
}

const scrap = (start) => {
  return getSpreadsheet()
    .then(getData(start))
}

module.exports = scrap
