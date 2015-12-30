import express from 'express';
import  mongoose from 'mongoose';
const  router = express.Router();
import bodyParser from 'body-parser';
const User = mongoose.model('User');

const jsonParser = bodyParser.json()

module.exports= function (app) {

    app.use("/reg",router);
};
//用户注册
router.post('/', jsonParser, function (req, res) {
    const { password , email , repassword , repassword } = req.body || {};

    /*var user = new User({password,email});*/
    user.save((err,user)=>{
        if(!err){
            res.status(200).json({"data":{ bl: 1,msg:"注册成功" }});
        }
    });

});
