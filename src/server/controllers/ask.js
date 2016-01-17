import express from 'express';
import  mongoose from 'mongoose';
import uuid from 'node-uuid';
import bodyParser from 'body-parser';
const jsonParser = bodyParser.json()

const router = express.Router();
const Topic = mongoose.model('Topic');
module.exports= function (app) {
    app.use("/",router);
};

//发布话题
router.post('/ask/publish', jsonParser,function (req, res) {
	res.status(300).end()
	const{title , content, typeId } = req.body;
	const{id:id ,userId: _id, viewtotals:__v,status: status} = req.session;
    
	const topic = new Topic({title ,content, typeId,id,userId,viewtotals,status})
   
	topic.save((err,topic)=>{
        
        if(!err){
            
            res.status(200).json({"data":{ bl: 1,msg:"发表成功" }});
        }else{
        	res.status(200).json({"data":{ bl: 0,msg:"发表失败" }});
        }
    });
});