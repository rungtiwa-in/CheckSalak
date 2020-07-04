const express = require('express')
const salakController = require('../controllers/salakController')
const router = express.Router()

router.post('/self', salakController.getSalakBySelf)
router.post('/round', salakController.getSalakByRound)

module.exports = router

