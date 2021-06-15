//connect to schemas for templates
//create data variable to pull info from json files in same folder

const User = require('../models/User')
const modelData = require('./user.json')

//crating new collection w/ Bachelor.collection called Bachelor
User.remove({})
User.collection.insert(modelData)
//.then((this word represents the output or results))
  .then(data => {
    console.log(data)
  })
  .catch(err => {
    console.log(err)
  })


