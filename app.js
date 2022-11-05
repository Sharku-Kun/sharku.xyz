const express       =require('express');
const app           = express();


app.use(express.static(__dirname));
app.use(express.static(__dirname + '/dist'));

app.get('/',function(req,res){
  res.sendFile(__dirname + "/" + "index.html");
});

app.get('/contact',function(req,res){
  res.sendFile(__dirname + "/" + "contacts.html");
});


app.listen(3000);

console.log("Running at Port 3000");