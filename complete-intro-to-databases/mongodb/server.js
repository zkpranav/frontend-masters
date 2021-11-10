const express = require('express')
const { MongoClient } = require('mongodb')

// Connection string usually pulled from env
const connecitonString = 'mongodb://localhost:27017'

async function init() {
  // Retrieve client and connect
  const client = new MongoClient(
    connecitonString,
    { useUnifiedTopology: true }
  )
  await client.connect()

  const app = express()

  app.get('/get', async (req, res) => {
    // Pull a ref to the database and the collection
    const db = client.db('adoption')
    const collection = db.collection('pets')

    // Perform text search
    const pets = await collection.find({
      $text: { $search: req.query.search }
    }, { _id: false }).sort({
      score: { $meta: 'textScore' }
    }).limit(10).toArray()

    res.status(200).json({ data: pets })
  })

  // Setup app to listen
  const PORT = 3000

  app.use(express.static('./static'))

  app.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}`)
  })
}
init()