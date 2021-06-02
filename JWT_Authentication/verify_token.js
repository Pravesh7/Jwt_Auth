const jwt =require('jsonwebtoken');

module.exports.verifyJwtToken=(req,res,next)=>{
    
    const token=req.header('auth-token');
     
    if(!token){
        return res.status(401),send({message:"access denied"});
    }
    try{
        const verified= jwt.verify(token, process.env.TOKEN_KEY);
        req.use=verified;
        next();
    }
    catch(err){
        res.status(400).send({message:"Invalid Token"})
    }
};