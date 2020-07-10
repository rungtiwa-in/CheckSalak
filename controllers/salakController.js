const mongoose = require('mongoose')
const Customer = require('../models/customerModel')

module.exports.getSalakBySelf = async (req, res) => {
    const { cid } = req.body

    res.status(200).json(`getSalakBySelf >> cid : ${cid}`)
}

module.exports.getSalakByRound = async (req, res) => {
    const { date } = req.body

    res.status(200).json(`getSalakByRound >> date : ${date}`)
}

module.exports.createCustomer = async (req, res) => {
    console.log(req.body)

    const { cid, cif, customer_name } = req.body
    let customer = new Customer({
        cid: cid,
        cif: cif,
        customer_name: customer_name
    })

    try {
        await customer.save()
        res.status(201).json({ data: { customer } })
    } catch (error) {
        res.status(500).json({ errors: { error } })
    }
}

module.exports.importRoundAward = async (req, res) => {
    console.log(req.body)


    try {
        res.status(201).json('import success')
    } catch (error) {
        res.status(500).json({ errors: { error } })
    }
}