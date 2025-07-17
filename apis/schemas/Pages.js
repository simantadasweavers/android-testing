const mongoose = require('mongoose');
const { Schema } = mongoose;

const contactSchema = new Schema({
    first_name: { type: String, require: true },
    last_name: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    phone: Number,
    subject: String,
    message: String,
});


module.exports = contactSchema;