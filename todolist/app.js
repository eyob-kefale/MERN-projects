const express = require("express")
const bodyParser=require("body-parser")

const date=require(__dirname+"/date.js");

const app=express();

app.set("view engine", "ejs");


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


var items=["coffee","water","tea"];


app.get("/", function(req, res){
   let day=date.getDate();


   res.render("list",{kindOfDay:day,addnewitem:items})


}) 
app.get("/about",function (req,res) {
    res.render("about")
})

app.post("/",function(req,res){
var item= req.body.newItem;
items.push(item);
res.redirect("/");
})



app.listen(3000,function(){
    console.log("Server started on port 3000")
})