import mongoose from 'mongoose'
const Schema = mongoose.Schema

const lyricsSchema = new Schema({
    title: String,
    lyrics: String,
    date: String
})

module.exports = mongoose.model('lyrics', lyricsSchema)