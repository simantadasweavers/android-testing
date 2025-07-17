const mongoose = require('mongoose');
const { Schema } = mongoose;

const appSchema = new Schema({
    app_name: { type: String, require: true },
    google_play_url: { type: String, require: true },
    apk_file: { type: String, require: true, unique: true },
    apk_image: { type: String, require: true, unique: true },
    additional_info: String,
    date: String,
    status: { type: String, default: 'approval' }, // ex: app states: 'approval', 'progress', 'ready' 
    user_id: {type: mongoose.Types.ObjectId, ref: "User", require: true},
    tester_id: {type: mongoose.Types.ObjectId, ref: "Tester" } 
});

module.exports = appSchema;