const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    first_name: { type: String, require: true },
    last_name: { type: String, require: true },
    email: { type: String, require: true, unique: true},
    password: { type: String, require: true },
    pri_phone: { type: String },
    sec_phone: { type: String },
    role: { type: String, default: "user" }, // ex: user
    active: { type: Boolean, default: true } ,
    credits: { type: Number, require: true, default: 0 },
});


module.exports = userSchema;