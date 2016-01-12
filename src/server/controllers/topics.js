import express from 'express';
import  mongoose from 'mongoose';
const router = express.Router();

const Topic = mongoose.model('Topic');
module.exports= function (app) {
    app.use("/topics",router);
};
//查询列表
router.post('/get', function (req, res) {

    res.status(200).json({...data});
});
//发布话题
router.post('/publish', function (req, res) {

    res.status(200).json({...data});
});
