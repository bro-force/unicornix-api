const admin = require('firebase-admin')

let serviceAccount = null

if (process.env.PRODUCTION === 'true') {
  serviceAccount = JSON.parse(process.env.SERVICE_ACCOUNT)
} else {
  serviceAccount = require('../serviceAccount.json')
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.DATABASE_URL
})

const db = admin.database()

module.exports = db
