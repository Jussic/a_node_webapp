var express = require('express');
var app =  express();

// Bind express app to port 
app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  console.log("Chat server listening");
});


app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/style', express.static(__dirname + '/style'));

app.get('/', function(req,res){
    res.sendFile('home.html', {'root':__dirname + '/templates'});
})

app.get('/showSignInPage',function(req,res){
    res.sendFile('signin.html',{'root': __dirname + '/templates'});
})

app.get('/showSignUpPage',function(req,res){
  res.sendFile('signup.html',{'root':__dirname + '/templates'})
})
