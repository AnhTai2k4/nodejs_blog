const express = require('express')
const app = express()
const router = express.Router()

const meController = require('../app/controllers/MeController')
// newsController.index

router.get('/stored/courses',meController.storedCourses)
router.get('/stored/news',meController.storedNews)


module.exports = router