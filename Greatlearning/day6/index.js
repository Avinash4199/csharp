const  express = require ("express");

const connectDb = require('./connectDB.js');

const web = require ("./routes/routes.js");
const bodyParser = require("body-parser");


var app = express();
app.use(bodyParser.json())
const port = 3000;


app.use("/api", web);

var databaseUrl ="mongodb://localhost:27017";

connectDb(databaseUrl);
app.listen(port, ()=>
{
  console.log(`Connected at ${port}`);
})
