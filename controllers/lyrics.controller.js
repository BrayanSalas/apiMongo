const Lyrics = require('../models/lyrics.model')

module.exports = {
    index: async (req, res) => {
        const letras = await Lyrics.find()
        res.status(200).json({letras, success: true})
    },

    newLyrics: async (req, res) => {
        const newLyrics = new Lyrics(req.body)
        const respose = await newLyrics.save()
        res.status(200).json({response, success:true})
    }
}