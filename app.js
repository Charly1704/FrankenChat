var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var Chat = require("./models/chat").Chat;

app.set("view engine","jade");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + "/public"));
app.get("/",function(req,res){
    res.render("index");


});
app.get("/api/chat",function(req,res){
  console.log("Procesando informacion");
  Chat.find()
  .exec(function(err, mensaje){
    res.json(mensaje);
    console.log(mensaje);
  }),function(err){
    console.log(err)
  }
})


app.post("/",function(req,res){
    var chat = new Chat({
        mensaje: req.body.mensaje

    });
    chat.save().then(function(us){

res.redirect("/")
console.log("Se guardo el mensaje");

},function(err){

  console.log(String(err));

});


});

app.listen(8080);
