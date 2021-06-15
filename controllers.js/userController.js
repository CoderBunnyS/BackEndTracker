const User = require("../models/User")
//all of the following objects are going to be modules that we are exporting
//to be used in another file
module.exports = {
//loads faster to break functions out of the list of routes
//tells it the function to run depending on the route/params the user enters
  index: (req, res) => {
    User.find({})
      .then(data => {
        res.json(data)
      })
  },
  showTitle: (req, res) => {
    User.find({title: req.params.title})
      .then(data => {
        res.json(data)
      })
  },
//   showCategory: (req, res) => {
//     Prizes.find({category: req.params.category})
//       .then(data => {
//         res.json(data)
//       })
//   },
  create: (req, res) => {
    User.create(req.body)
      .then(data => {
        res.json(data)
      })
  },
  edit: (req, res) => {
    User.findOneAndUpdate({title: req.params.title}, req.body)
      .then(data => {
        res.json(data)
      })
  },
  delete: (req, res) => {
    User.findOneAndDelete({title: req.params.title})
      .then(data => {
        res.json(data)
      })
  }
}
