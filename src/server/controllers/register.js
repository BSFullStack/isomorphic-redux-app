import express from 'express';
import  mongoose from 'mongoose';
import crypto from 'crypto';
import uuid from 'node-uuid';

import async from 'async';
import { setError , setOk } from '../lib/utils';
//初始化router
const  router = express.Router();
//导入User的Model
const User = mongoose.model('User');



module.exports= function (app) {

    app.use("/reg",router);
};
//用户注册
router.post('/', function (req, res) {
    const { name , password , email   } = req.body ;
    const passHash = crypto.createHash('md5').update(password).digest('hex');


    var userEntity = new User({
        name,
        password:passHash,
        email,
        id:uuid.v4()
    });
    //查看用户名是否唯一
    User.checkUser({name},(err,user)=>{
        if(err){
            return res.status(200).json(setError());
        }
        if(user){ //存在,则已经占用
            return res.status(200).json(setError({msg:"用户名已经被占用！"}));
        }
        //查看邮箱是否唯一
        User.checkUser({email},(err,user)=>{
            if(err){
                return res.status(200).json(setError());
            }
            if(user){ //存在,则已经占用
                return res.status(200).json(setError({msg:"邮箱已经被占用！"}));
            }
            userEntity.save((err,user)=>{
                if(!err){
                    req.session.user = user;
                    res.status(200).json(setOk());
                }
            });
        })

    });
   /* async.waterfall([
        User.findByName({name:userEntity.name},function(cb){
            return cb();
        }),
        function
    ]);*/
    //查找是否有同名的
   /* User.findByName({name:userEntity.name},(error,user)=>{
        if(!user){
            userEntity.save((err,user)=>{
                if(!err){
                    res.status(200).json(setOk());
                }
            });
        }else {
            res.json(setError())
        }
    })*/


});
