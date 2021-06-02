const bcrypt=require('bcryptjs');
const  signup_modal=require('../modal/modal');

module.exports.create_account= async(req, res) =>{

const hashpassword=await bcrypt.hash(req.body.password,10);

    const user_detail= new signup_modal({
        email:req.body.email,
        password:hashpassword
    })
    try{
        const result= await user_detail.save();
        res.status(200).send(result);
    }
    catch(err){
    if(err.code==11000){
        res.status(400).send({message: "Email Already exists"});
    }
    else{
        res.status(500).send(err);
    }
    }
}

module.exports.update_account= async (req,res) =>{
 
    const hashpassword=await bcrypt.hash(req.body.password,10);
    const update_user= {
        email:req.body.email,
        password:hashpassword
    }
    try{
        const result=await signup_modal.findByIdAndUpdate({_id:req.bodyid},{$set:update_user},{new:true});
        res.status(200).send(result)
    }
    catch(err){
        res.status(400).send(err);
    }
}

module.exports.delete_account= async(req,res) =>{
    try{
        await signup_modal.findByIdAndDelete(req.params.id);
        res.status(200).send('deleted successfully')
    }
    catch(err){
        res.status(500).send(err);
    }
}