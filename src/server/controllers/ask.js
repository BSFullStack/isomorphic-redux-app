import express from 'express';
import mongoose from 'mongoose';
import uuid from 'node-uuid';
import { setError , setOk } from '../lib/utils';
const router = express.Router();
const Topic = mongoose.model('Topic');
const TopicTagRelation = mongoose.model('TopicTagRelation');

module.exports= function (app) {
    app.use("/",router);
};

//发布话题

router.post('/ask/publish', function (req, res) {

	const {
        title  ,
        content ,
        tagId = []
    } = req.body;

    const { user } = req.session;
    const { id:userId } = user;
    const topicId = uuid.v4();
    const tagIds = tagId.split(",");
    const topicEntity = new Topic({
        title ,
        content ,
        id:topicId,
        userId ,
        tagIds
    });

	topicEntity.save((err,topic)=>{
        if(err || !topic){
            res.status(200).json(setError({msg:"发表失败！"}));
        }
       const ttrArray = tagIds.map((tagId)=>{
            return {
                topicId,
                tagId,
                id:uuid.v4()
            };
        });
        //保存关联
        TopicTagRelation.create(ttrArray,(err)=>{
            if(err){
                res.status(200).json(setError({msg:"发表失败！"}));
            }
            res.status(200).json(setOk({msg:"发表成功",topic}));
        });

    });
});
