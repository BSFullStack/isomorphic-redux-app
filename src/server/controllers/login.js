import express from 'express';
import  mongoose from 'mongoose';

const  router = express.Router();
const User = mongoose.model('User');



module.exports= function (app) {

    app.use("/login",router);
};
//用户登录
router.post('/', function (req, res) {

   /* const { password ,email , confirmpassword } = req.body || {};
    var user = new User({password,email});
    user.save((err,user)=>{
        if(!err){
                res.status(200).json({"data":{ bl: 1,msg:"注册成功" }});
        }
    });*/

});
