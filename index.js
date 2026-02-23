const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.use(express.json()); // middleware to parse incoming JSON requests
app.use(express.urlencoded({ extended: true })); // middleware to parse incoming URL-encoded requests
app.use(express.static(path.join(__dirname, 'public'))); // middleware to serve static files from the 'public' directory
app.set("view engine", "ejs"); // setting the view engine to EJS for rendering dynamic HTML templates
    
app.get('/', function(req, res){
    fs.readdir(`./files`, function(err, files) {
        res.render("index", { files: files });
    })
})

app.get('/files/:filename', function(req, res){
    fs.readFile(`./files/${req.params.filename}`, "utf-8", function(err, filedata) {
        res.render('show', { title: req.params.filename.split(".txt")[0], content: filedata });
    })
})

app.post('/create', function(req, res){
    fs.writeFile(`./files/${req.body.title.split(" ").join("")}.txt`, req.body.details, function(err) {
        res.redirect("/");
    })
})

app.get('/edit/:filename', function(req, res){
    res.render('edit', { prevtitle: req.params.filename});
})

app.post('/edit', function(req, res){
    fs.rename(`./files/${req.body.prevTitle}`, `./files/${req.body.newTitle}.txt`, function(err) {
        res.redirect("/");
    })
})

app.listen(3000, function(){
    console.log("Server is running on port 3000");
});