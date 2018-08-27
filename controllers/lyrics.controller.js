const Lyrics = require('../models/lyrics.model')

module.exports = {
    index: async (req, res) => {
        const letras = await Lyrics.find()
        res.status(200).json({letras, success: true})
    },

    newLyrics: async (req, res) => {
        const newLyrics = new Lyrics(req.body)
        const response = await newLyrics.save()
        res.status(200).json({response, success:true})
    },

    modifyLyrics: async (req, res) => {
        const {id} = req.params
        const modify = req.body
        const response = await Lyrics.findByIdAndUpdate(id, modify)
        res.status(200).json({response, success: true})
    },

    deleteLyrics: async (req, res) => {
        const {id} = req.params
        const response = await Lyrics.findByIdAndDelete(id)
        res.status(200).json({response, success: true})
    }
}