import express from 'express';
import  mongoose from 'mongoose';
import { setError , setOk ,sendOk} from '../lib/utils';
const router = express.Router();

const Topic = mongoose.model('Topic');
module.exports= function (app) {
    app.use("/topics",router);
};
//查询列表
router.post('/get', function (req, res) {
    const { pageIndex = 1 , pageSize = 15 } = req.body;
    Topic.get({pageIndex,pageSize,queryParam:{}},(err,result)=>{
        if(result){
            res.status(200).json({...result});
        }

    })
});

//详情页
router.post('/getDetail', function (req, res) {
    const { topicId } = req.body;

    Topic.getDetail(topicId,(err,result)=>{
        if(result){
            res.status(200).json({data:result});
        }

    })
});

//发布话题
router.post('/publish', function (req, res) {

    res.status(200).json({...data});
});
