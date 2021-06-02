const mongoose=require('mongoose');

const user_schema=mongoose.Schema({
    email:req.body.email,
    password:req.body.password
});

module.exports =mongoose.model("user_collection",user_schema);
