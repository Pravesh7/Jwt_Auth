const express=require('express');
const router= express.Router();

const loginController=require ('../controller/login.js');

router.post('/',loginController.login);

module.exports=router;