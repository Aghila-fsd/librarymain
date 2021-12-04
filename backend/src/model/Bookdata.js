const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://USERONE:USERONE@ictakfiles.rp8eh.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');

//mongoose.connect('mongodb://localhost:27017/libraryapp');

const Schema=mongoose.Schema;
const BookSchema=new Schema({
    bookid:Number,
    title:String,
    author:String,
    genre:String,
    imageUrl:String
});
var Bookdata=mongoose.model('bookdata',BookSchema);
module.exports=Bookdata;