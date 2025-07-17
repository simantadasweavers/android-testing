const mongoose = require('mongoose');
const { Schema } = mongoose;

const paymentSchema = new Schema({
    user_id: {type: mongoose.Types.ObjectId, ref: "User", require: true},
    fullname: { type: String },
    email: { type: String, require: true },
    credits: { type: Number, require: true },
    phone: { type: String },
    address: { type: String },
    stripe_intent_id : { type: String },
    status: { type: String, default: 'failed' },
    pay_success_datetime: { type: String }
});

module.exports = paymentSchema;