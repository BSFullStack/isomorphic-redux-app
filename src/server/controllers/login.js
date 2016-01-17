import express from 'express';
import mongoose from 'mongoose';
import { setError , setOk ,sendOk} from '../lib/utils';
import crypto from 'crypto';
import uuid from 'node-uuid';

const router = express.Router();
const User = mongoose.model('User');

module.exports= function (app) {
    app.use("/login",router);
};
//用户登录
router.post('/', function (req, res) {
    const { password , email } = req.body;

    const passHash = crypto.createHash('md5').update(password).digest('hex');

    //根据用户名查询
    User.checkUser({email:email,password:passHash},(error,user)=>{
        console.log(user);
        if(error || !user){
            res.status(200).json(setError({msg:"账号或者密码不正确!"}));
        }else {
            req.session.user = user;
            res.status(200).json(setOk({msg:"登录成功！",user}));
        }
    });
});
