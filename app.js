import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import lyrics from './routes/lyrics.route'

const app = express()
app.set('json spaces', 4)

// Mongo Connection
mongoose.connect('mongodb://localhost:27017/Lyrics', {useNewUrlParser: true})
    .then(() => {
        console.log('The app has been connected to MongoDB')
    }).catch(err => {
        throw new Error(err)
    })

// Middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use(morgan('dev'))

// Routes
app.use('/Lyrics', lyrics)

// PORT and Start app
app.set('port', process.env.PORT || 3000)
const PORT = app.get('port')

app.listen(PORT, () => {
    console.log('Listening in port: ', PORT)
})