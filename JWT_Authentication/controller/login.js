const bcrypt = require('bcryptjs');
const login_modal=require('../modal/modal');
const jwt= require('jsonwebtoken');

module.exports.login=async(req,res) =>{

    try{
        // Verifying Email
        const user= await login_modal.findOne({email:req.body.email});
        if(!user){
            res.status(400).json({message:"Email Does not exists"});
        }
        
        // Password Verification
        const password = await bcrypt.compare(req.body.password, user.password);
        if(!password){
            res.status(400).json({message:"Invalid Password"});
        }
        
        // Create and assign token
        const token = jwt.sign({_id: user._id},process.env.TOKEN_KEY);
        // Token are saved in headers
        res.header("TOken",token).send(token)
    }
    catch(err){
     res.status(500).send(err);
    }
}