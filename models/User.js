const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    moods: {
        type: Map,
        of: String,
        default: {}
    }
}, {timestamps: true});

module.exports = mongoose.model('User', userSchema, 'users');