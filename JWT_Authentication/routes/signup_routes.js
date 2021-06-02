const express=require('express');
const router= express.Router();

const signupController=require ('../controller/sigup.js');

router.post('/',signupController.create_account);
router.post('/:id',signupController.update_account);
router.post('/:id',signupController.delete_account);



module.exports=router;