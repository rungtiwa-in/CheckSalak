const mongoose = require('mongoose')

module.exports.getSalakBySelf = async (req, res) => {
    const { cid } = req.body

    res.status(200).json(`getSalakBySelf >> cid : ${cid}`)
}

module.exports.getSalakByRound = async (req, res) => {
    const { date } = req.body
    
    res.status(200).json(`getSalakByRound >> date : ${date}`)
}