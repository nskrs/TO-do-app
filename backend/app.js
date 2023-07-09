const express = require("express");
const bodyParser = require('body-parser');



const cors = require("cors");

const routes = require("./routes/ToDoRoute");
const sequelize=require('../utils/database');

const app = express();


app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());

app.use(cors());
app.use(routes)

sequelize.sync().then(result=>{
    console.log(result);
    app.listen(3000);

}).catch(err=>{
    console.log(err);
})