const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InforSchema = new Schema({
    access_token: {
        type: String,
        required: true
    },
    domain: {
        type: String,
        required: true
    },
    customer_email: {
        type: String,
        required: true
    }

})

module.exports = User = mongoose.model('infos', InforSchema);