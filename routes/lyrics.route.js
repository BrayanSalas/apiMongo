import routerInit from 'express-promise-router'
import { index, newLyrics, deleteLyrics, modifyLyrics } from '../controllers/lyrics.controller'
const router = routerInit()

router.get('/', index)
router.post('/', newLyrics)
router.put('/:id', modifyLyrics)
router.delete('/:id', deleteLyrics)

module.exports = router