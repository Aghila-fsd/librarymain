const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://USERONE:USERONE@ictakfiles.rp8eh.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');
//mongoose.connect('mongodb://localhost:27017/libraryapp');

const Schema=mongoose.Schema;
const AuthorSchema=new Schema({
    authorid:Number,
    author:String,
    title:String,
    genre:String,
    imageUrl:String
});
var Authordata=mongoose.model('authordata',AuthorSchema);
module.exports=Authordata;