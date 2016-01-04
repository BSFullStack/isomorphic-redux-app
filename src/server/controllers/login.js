import express from 'express';
import  mongoose from 'mongoose';
import bodyParser from 'body-parser';
import { setError , setOk } from '../lib/utils';
import crypto from 'crypto';

const  router = express.Router();
const User = mongoose.model('User');
const jsonParser = bodyParser.json()


module.exports= function (app) {

    app.use("/login",router);
};
//用户登录
router.post('/',jsonParser , function (req, res) {

    const { password , name } = req.body || {};
    const passHash = crypto.createHash('md5').update(password).digest('hex');
    User.findByName({name:name,password:passHash},(error,user)=>{
        if(!user){
            console.log("登录失败");
            return res.status(200).json(setError({msg:"账号或者密码不正确!"}));
        }else {
            console.log("登录成功！");
            return res.status(200).json(setOk({msg:"登录成功！"}));
        }
    })
   /* var user = new User({password,email});
    user.save((err,user)=>{
        if(!err){
                res.status(200).json({"data":{ bl: 1,msg:"注册成功" }});
        }
    });*/

});
