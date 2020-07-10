const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
    salakAcc_id : { type: Number, required: true, trim: true },
    salakAcc_name : { type: Number, required: true, trim: true },
    salakAcc_branch: { type: String, trim: true },
    cid: { type: Schema.Types.ObjectId, ref: 'SalakAccount' }
}, {
    toJSON: { virtuals: true },
    timestamps: true,
    collection: 'SalakAccounts'
})

const salakAccount = mongoose.model('SalakAccount', schema)

module.exports = salakAccount