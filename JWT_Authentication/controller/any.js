module.exports.any= async(req,res) =>{
 try{
    return  res.status(200).json({message: "VERIFIED"})
 }
 catch(err){
   return res.status(500).send(err);
 }    
}