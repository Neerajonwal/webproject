
const express = require("express");
const app = express();
const hbs = require("hbs")
const path = require("path")
port = process.env.PORT || 5000;
const staticpath = path.join(__dirname,"../public");
const templatepath = path.join(__dirname,"../templates/views");
const partialspath = path.join(__dirname,"../templates/partials");

app.set('view engine', 'hbs');
app.set('views',templatepath);
app.use(express.static(staticpath));
hbs.registerPartials(partialspath);


app.get("",(req,res)=>{ 
    res.render("index.hbs")
})
app.get("/home",(req,res)=>{
    res.render("index.hbs")
})
app.get("/about",(req,res)=>{
    res.render("about")
})
app.get("/weather",(req,res)=>{
    res.render('weather')
})
app.get("*",(req,res)=>{
    res.render("404error",{
        errmsg: 'oops page not found'
    })
})


app.listen(port,()=>{
    console.log(`this is localhost ${port}`)
})