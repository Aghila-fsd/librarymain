const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://USERONE:USERONE@ictakfiles.rp8eh.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');
//mongoose.connect('mongodb://localhost:27017/libraryapp');


// User Schema
const UserSchema = mongoose.Schema({
  username:String,
  email:String,
  password:String,
  confirmpassword:String 
});

const Userdata = mongoose.model('userdata', UserSchema);
module.exports= Userdata;