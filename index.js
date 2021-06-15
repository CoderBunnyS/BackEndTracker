const cors = require("cors")
//express is server
//app activates express function so it's usable w/ app.use or app.listen, etc
const express = require('express');
const app = express();
//body-parser takes info from form/postman and 
//formats it so both express(server) and mongoose (database) can read it
const bodyParser = require('body-parser');

//when app (server function) is called - format it to JSON
app.use(bodyParser.json())
//when app (server function) is called for routes - /routes/Nobel_Routes is required in url
//w/ require you're connecting it to the list of routes available
app.use('/', require('./routes/User_Routes'))


app.listen(4000, () => console.log('listening on port 4000'))
