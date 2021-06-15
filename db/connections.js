//saying use installed mongoose software to 
//create or updates already made database

const mongoose = require("mongoose")

mongoose.connect('mongodb://localhost/Nobel_Prize', { useNewUrlParser: true })

module.exports = mongoose