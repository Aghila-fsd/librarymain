const express = require('express');
const Authordata=require('./src/model/Authordata');
const Bookdata=require('./src/model/Bookdata');
//const Userdata=require('./src/model/Userdata');
// const jwt=require('jsonwebtoken');
var app = new express();
const path = require('path');
app.use(express.static(`./dist/<libraryapp>`));
const cors = require('cors');
const { title } = require('process');

app.use(cors());
app.use(express.json());
username='admin';
password='1234';

/*login start*/


/*login end*/
app.get(`/*`, function(req, res) {
    res.sendFile(path.join(__dirname + '/dist//<libraryapp>/index.html'));
   });
   


/*bookpage start*/
app.post('/api/insert',function(req,res){
   
    console.log(req.body);
   
    var book = {       
        bookid : req.body.book.bookid,
        title : req.body.book.title,
        author: req.body.book.author,
        genre: req.body.book.genre, 
            imageUrl : req.body.book.imageUrl,
   }       
   var book = new Bookdata(book);
   book.save();
});
app.get('/api/books',function(req,res){
    
    Bookdata.find()
                .then(function(books){
                    res.send(books);
                });
});
app.get('/api/:id',  (req, res) => {
  
  const id = req.params.id;
    Bookdata.findOne({"_id":id})
    .then((book)=>{
        res.send(book);
    });
})
app.put('/api/update',(req,res)=>{
    console.log(req.body)
    id=req.body._id,
    bookid = req.body.book.bookid,
    title = req.body.book.title,
    author = req.body.book.author,
    genre =  req.body.book.genre, 
    imageUrl  = req.body.book.imageUrl,
   Bookdata.findByIdAndUpdate({"_id":id},
                                {$set:{"bookid":bookid,
                                "title":title,
                                "author":author,
                                "genre":genre,
                                "imageUrl":imageUrl}})
   .then(function(){
       res.send();
   })
 })
 
app.delete('/api/remove/:id',(req,res)=>{
 
   id = req.params.id;
   Bookdata.findByIdAndDelete({"_id":id})
   .then(()=>{
       console.log('success')
       res.send();
   })
 })

/*Bookpage end*/


/*authorpage start*/
app.post('/api/insert',function(req,res){
   
    console.log(req.body);
   
    var author = {       
        authorid : req.body.author.authorid,
        author: req.body.author.author,
        title: req.body.author.title,
        genre: req.body.author.genre, 
        imageUrl : req.body.author.imageUrl,
   }       
   var author = new Authordata(book);
   author.save();
});
app.get('/api/authors',function(req,res){
    
    Authordata.find()
                .then(function(authors){
                    res.send(authors);
                });
});
app.get('/api/:id',  (req, res) => {
  
  const id = req.params.id;
    Authordata.findOne({"_id":id})
    .then((author)=>{
        res.send(author);
    });
})
app.put('/api/update',(req,res)=>{
    console.log(req.body)
    id=req.body._id,
    authorid = req.body.author.authorid,
    author = req.body.author.author,
    title = req.body.author.title,
    genre =  req.body.author.genre, 
    imageUrl  = req.body.author.imageUrl,
   Authordata.findByIdAndUpdate({"_id":id},
                                {$set:{"authorid":authorid,
                                "author":author,
                                "title":title,
                                "genre":genre,
                                "imageUrl":imageUrl}})
   .then(function(){
       res.send();
   })
 })
 
app.delete('/api/remove/:id',(req,res)=>{
 
   id = req.params.id;
   Authordata.findByIdAndDelete({"_id":id})
   .then(()=>{
       console.log('success')
       res.send();
   })
 })

/*authorpage end*/



app.listen(2017, function(){
    console.log('listening to port 2017');
});