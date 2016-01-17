import express from 'express';
import  mongoose from 'mongoose';
import _ from 'lodash';
import { isLoginAuth } from '../middlewares/loginAuth';
import { setError , setOk ,sendOk} from '../lib/utils';
import emailService from '../lib/emailHelper';
import credentials from '../config/credentials';

const eS = emailService(credentials);
const router = express.Router();

const Topic = mongoose.model('Topic');
const User = mongoose.model('User')
module.exports= function (app) {
    app.use("/topics",router);
};
//查询列表
router.post('/get', function (req, res) {
    const { pageIndex = 1 , pageSize = 15 ,lastTime } = req.body;
    Topic.get({pageIndex,pageSize,lastTime},(err,result)=>{
        if(result){
            res.status(200).json({...result});
        }

    })
});

//详情页
router.post('/getDetail', function (req, res) {
    const { topicId } = req.body;

    Topic.getDetail(topicId,(err,result)=>{
        if(err){

            res.status(200).json({
                data:{
                    error:true,
                    code:404
                }
            });
        }
        if(result){
            res.status(200).json({data:result});
        }

    })
});

//详情页 发表回答
router.post('/addAnswer',isLoginAuth,function(req,res){
   const { answerUserId , topicId , answerContent } = req.body;

   Topic.addAnswer({answerUserId , topicId , answerContent},(err,answer)=>{
        if(err || !answer){
            res.status(200).json(setError());
        }
        if(answer){
            //发邮件
            Topic.getDetail(topicId,function(err,userInfo){
                User.getOne(userInfo.id,function(err,user){
                    eS.send(user.email,"您有新的消息，亲及时查收","")
                })
            })
            
            res.status(200).json({data:answer});
        }
   });


});


//发布话题
router.post('/publish', function (req, res) {

    res.status(200).json({...data});
});

