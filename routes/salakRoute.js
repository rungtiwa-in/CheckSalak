const express = require('express')
const salakController = require('../controllers/salakController')
const router = express.Router()

router.post('/self', salakController.getSalakBySelf)
router.post('/round', salakController.getSalakByRound)
router.post('/customer', salakController.createCustomer)
router.post('/award', salakController.importRoundAward)

module.exports = router

