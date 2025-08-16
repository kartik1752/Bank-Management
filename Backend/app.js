const express=require('express');
const router=express.Router();
const customerRoute=require('./Routes/userRoutes');

router.use('/customer',customerRoute);

module.exports = router;