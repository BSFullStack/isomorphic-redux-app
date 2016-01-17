import express from 'express';
import  mongoose from 'mongoose';
import _ from 'lodash';
import { isLoginAuth } from '../middlewares/loginAuth';
import { setError , setOk } from '../lib/utils';
const router = express.Router();
const Tag = mongoose.model('Tag');

module.exports= function (app) {
    app.use("/tags",router);
};


//查询所有Tags
router.post('/getAll', function (req, res) {
    //获取tags
    Tag.getAll((err,tags)=>{
        if(err){
             res.status(200).send({
                error:{
                    code:500,
                    msg:"查询出错！"
                }
            });
        }
        res.status(200).send({data:tags,user:req.session.user});
    });
});

