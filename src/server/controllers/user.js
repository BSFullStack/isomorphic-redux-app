import express from 'express';
import mongoose from 'mongoose';
import { setError , setOk ,sendOk} from '../lib/utils';
import crypto from 'crypto';
import uuid from 'node-uuid';

const router = express.Router();
const User = mongoose.model('User');

module.exports= function (app) {
    app.use("/api/user",router);
};
//用户登录
router.post('/login', function (req, res) {
    const { password , email } = req.body;
    const passHash = crypto.createHash('md5').update(password).digest('hex');

    //根据用户名查询
    User.checkUser({email:email,password:passHash},(error,user)=>{

        if(error || !user){
            res.status(200).json({

                msg:"邮箱或者密码不正确！",
                error:true,
                bl:0,

            });
        }else {
            req.session.user = user;
            res.status(200).json({
                msg:"登录成功！",
                bl:1,
                error:false,
                user
            });
        }
    });
});
