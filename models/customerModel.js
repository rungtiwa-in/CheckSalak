const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
    cid: { type: Number, required: true, trim: true },
    cif: { type: Number, required: true, trim: true },
    customer_name: { type: String, trim: true },
    salak_account: [
        {
            acc_id: { type: Number, required: true, trim: true },
            acc_name: { type: String, trim: true },
            acc_branch: { type: String, trim: true },
            salak: [
                {
                    salak_unit: { type: String, trim: true },
                    salak_start: { type: String, trim: true },
                    salak_end: { type: String, trim: true },
                    salak_total: { type: String, trim: true },
                }
            ]
        }
    ]
}, {
    toJSON: { virtuals: true },
    timestamps: true,
    collection: 'customers'
})

// schema.virtual('SalakAccounts', {
//     ref: 'SalakAccount',
//     localField: '_id',
//     foreignField: 'cid'
// })

const customer = mongoose.model('customer', schema)

module.exports = customer