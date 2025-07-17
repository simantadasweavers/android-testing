const mongoose = require('mongoose');
const { Schema } = mongoose;

const testerSchema = new Schema({
    first_name: { type: String, require: true },
    last_name: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    pri_phone: { type: String },
    sec_phone: { type: String },
    role: { type: String }, // role: tester
    active: Boolean,
    credits: { type: Number, require: true },
});


module.exports = testerSchema;