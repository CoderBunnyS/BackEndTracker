const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const User = new Schema({
    lastName: String,
    firstName: String,
    email: String,
    jobs: [
        {

            company: String,
            title: String,
            applied: Date,
            //share: Number
        }
    ]})

module.exports = mongoose.model('User', user)
