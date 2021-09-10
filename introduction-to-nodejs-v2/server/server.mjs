import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'

/**
 * Creating express application
 */
const app = express()

/**
 * Setting up middleware
 */
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(morgan('dev'))

/**
 * Creating makeshift database
 */
const db = []

/**
 * Setting up routes
 */
app.post('/todo', (req, res) => {
    // console.log(req)

    const newTodo = {
        id: Date.now(),
        text: req.body.text
    }

    db.push(newTodo)

    res.json(newTodo)
    res.status(201)
})

app.get('/todo', (req, res) => {
    // console.log(req)

    res.json(db)
    res.status(200)
})

/**
 * Setting up the server
 */
app.listen(8000, () => {
    console.log('Listening on port: 8000')
})
