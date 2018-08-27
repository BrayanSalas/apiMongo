import routerInit from 'express-promise-router'
import { index, newLyrics, deleteLyrics } from '../controllers/lyrics.controller'
const router = routerInit()

router.get('/', index)
router.post('/', newLyrics)
router.delete('/:id', deleteLyrics)

module.exports = router