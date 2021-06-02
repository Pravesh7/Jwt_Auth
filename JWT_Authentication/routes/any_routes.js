const express=require('express');
const router= express.Router();

const any_controller=require('../controller/any');
const verifytoken=require('../verify_token/verifyJwtToken');

router.get('/',verifytoken.verifyJwtToken, any_controller.any )

module.exports= router;