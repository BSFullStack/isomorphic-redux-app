import express from 'express';
import  mongoose from 'mongoose';
import _ from 'lodash';
import { isLoginAuth } from '../middlewares/loginAuth';
import { setError , setOk ,sendOk} from '../lib/utils';
import mditor from "mditor";
const parser = new mditor.Parser();
import moment from 'moment';

const router = express.Router();

const Topic = mongoose.model('Topic');

import emailService from '../lib/emailHelper';
import credentials from '../config/credentials';
const eS = emailService(credentials);


const User = mongoose.model('User')

moment.locale('en', {
    relativeTime : {
        future: "在 %s",
        past:   "%s",
        s:  "刚刚",
        m:  "1分钟前",
        mm: "%d分钟前",
        h:  "1小时前",
        hh: "%d小时前",
        d:  "1天前",
        dd: "%d天前",
        M:  "1个月前",
        MM: "%d个月前",
        y:  "1年前",
        yy: "%d年前"
    }
});
moment.locale('zh-cn', {
    relativeTime : {
        future: "在%s",
        past:   "%s",
        s:  "刚刚",
        m:  "1分钟前",
        mm: "%d分钟前",
        h:  "1小时前",
        hh: "%d小时前",
        d:  "1天前",
        dd: "%d天前",
        M:  "1个月前",
        MM: "%d个月前",
        y:  "1年前",
        yy: "%d年前"
    }
});




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
   const {  topicId , answerContent } = req.body;
   const { id:answerUserId } = req.session.user;
   Topic.addAnswer({answerUserId , topicId , answerContent},(err,answer)=>{
        if(err || !answer){
            res.status(200).json(setError());
        }
        if(answer){
            //发邮件
            Topic.findOne({id:topicId},(err,topic)=>{

                User.findOne({id:topic.userId},(err,user)=>{
                    const { title } = topic ;
                    const { name } = user ;
                    eS.send(user.email,`您关注的${title}有了新的答案，请及时查看！`,
                        `  <h2 style='background:#222EFA'>SKT邮件通知：</h2>
                            <p>直达号->http://localhost:8000/t/${topicId}#a-${answer.id}</p>
                        `);
                });
            });
            let answerObj = answer.toObject();
            answerObj.userInfo = req.session.user;
            answerObj.content =parser.parse(answerObj.content);
           /* Topic.getDetail(topicId,function(err,userInfo){
                User.getOne(userInfo.id,function(err,user){
                    eS.send(user.email,"您有新的消息，亲及时查收","")
                })
            })*/

            res.status(200).json({data:answerObj});
        }
   });


});


//发布话题
router.post('/publish', function (req, res) {

    res.status(200).json({...data});
});

