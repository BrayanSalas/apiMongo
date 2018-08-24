import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import lyrics from './routes/lyrics.route'


const app = express()

// Mongo Connection
mongoose.connect('mongodb://localhost:27017/Lyrics', {useNewUrlParser: true})
    .then(res => {
        console.log('The app has been connected to MongoDB')
    }).catch(err => {
        throw new Error(err)
    })

// Middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use(morgan('dev'))

// Routes
app.set('/Lyrics', lyrics)

// PORT and Start app
app.set('port', process.env.PORT || 3000)
const PORT = app.get('port')

app.listen(PORT, () => {
    console.log('Listening in port: ', PORT)
})