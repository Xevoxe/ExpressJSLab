const express = require('express');
const path = require('path');
let app = express();
const bodyParser = require('body-parser');




app.use( (req,res,next)=>{
    console.log(req.url);
    next();
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/formsubmissions', (req,res) =>{
    console.log(req.body);
});

app.get('/', function(req, res, next){
    res.send("Hello World!")
});

app.listen(3000);