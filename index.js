const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//set router from express to handle RESTfull routes
const todoRoutes = require('./routes/todos');

//Access to request body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//set the default route as "localhost/api/todos"
app.use('/api/todos', todoRoutes);


app.get("/", function name(req, res) {
    res.send("Achouuu!");
})


app.listen(3000 || process.env.PORT, function name(params) {
    console.log("Running To-Do-List server...");
    
})