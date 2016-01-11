import express from 'express';
import mongoose from 'mongoose';

import { setError , setOk ,sendOk} from '../lib/utils';
import crypto from 'crypto';

const router = express.Router();
const User = mongoose.model('User');

module.exports= function (app) {
    app.use("/login",router);
};
//用户登录
router.post('/', function (req, res) {
    const { password , name } = req.body || {};
    const passHash = crypto.createHash('md5').update(password).digest('hex');
    //根据用户名查询
    User.findByName({name:name,password:passHash},(error,user)=>{
        if(!user){
            return res.status(200).json(setError({msg:"账号或者密码不正确!"}));
        }else {
            return res.status(200).json(setOk({msg:"登录成功！",user}));
        }
    });
});
