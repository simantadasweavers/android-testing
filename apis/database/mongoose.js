const mongoose = require('mongoose');
require('dotenv').config();


async function connect(){
    return await mongoose.connect(process.env.MONGO_DB_URL);
}

module.exports = connect;