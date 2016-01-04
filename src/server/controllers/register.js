import express from 'express';
import  mongoose from 'mongoose';
import crypto from 'crypto';
import uuid from 'node-uuid';
import bodyParser from 'body-parser';
import async from 'async';
import { setError , setOk } from '../lib/utils';
//初始化router
const  router = express.Router();
//导入User的Model
const User = mongoose.model('User');

const jsonParser = bodyParser.json()

module.exports= function (app) {

    app.use("/reg",router);
};
//用户注册
router.post('/', jsonParser, function (req, res) {
    const { name , password , email , repassword  } = req.body ;
    const passHash = crypto.createHash('md5').update(password).digest('hex');

    //判断密码是否一致
    if(password !== repassword){
        return res.json(setError())
    }
    var userEntity = new User({
        name,
        password:passHash,
        email,
        id:uuid.v4()
    });
   /* async.waterfall([
        User.findByName({name:userEntity.name},function(cb){
            return cb();
        }),
        function
    ]);*/
    //查找是否有同名的
    User.findByName({name:userEntity.name},(error,user)=>{
        if(!user){
            userEntity.save((err,user)=>{
                if(!err){
                    res.status(200).json(setOk());
                }
            });
        }else {
            res.json(setError())
        }
    })


});
