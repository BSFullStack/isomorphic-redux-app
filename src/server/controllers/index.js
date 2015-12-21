import express from 'express';
import  mongoose from 'mongoose';
import bodyParser from 'body-parser';
const User = mongoose.model('User');
const  router = express.Router();
const jsonParser = bodyParser.json()


module.exports= function (app) {

    app.use("/",router);
};

router.post('/user/reg',jsonParser, function (req, res) {

    const { password ,email , confirmpassword } = req.body || {};
    var user = new User({password,email});
    user.save((err,user)=>{
        if(!err){
                res.status(200).json({"data":{ bl: 1,msg:"注册成功" }});
        }
    });

});
