const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    Email: {
        type: String,
        required: true,
    },
    Password: {
        type: String,
        required: true,
    }
});

const adminSignIn = mongoose.model("adminSignIn", adminSchema);
module.exports = adminSignIn;