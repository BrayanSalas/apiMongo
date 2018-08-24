import routerInit from 'express-promise-router'
import { index } from '../controllers/lyrics.controller'
const router = routerInit()

router.get('/', index)
router.post('/', newLyrics)

module.exports = router