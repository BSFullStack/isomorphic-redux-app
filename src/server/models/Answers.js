import mongoose , { Schema } from 'mongoose';
import moment from 'moment';
import _ from 'lodash';
/**
 * 回答实体
 */
const Answers = new Schema({
    id:String,       //id
    content:String,  //内容
    topicId:String,  //所属话题
    userId:String,   //回答人的id
    star:{          //赞同的数量
        type:Number,
        default:0
    },
    accept:{        // 1 被采纳  0 没有被采纳
        type:Number,
        default:0
    },
    status:{       // 状态  1 显示中 0 已删除
        type:Number,
        default:1
    },
    answerTime:{ //回答时间
        type:Date,
        default:Date.now
    },
    updateTime:{ //更新时间
        type:Date,
        default:Date.now
    }
});

Answers.statics.getAllByTopicIds=function(topicIds,cb){

    this.aggregate(
    [
        {
            $match:{
                topicId: {
                    $in:topicIds
                }
            }
        },
        {
            $group:{
                "_id":{'id':'$id'},
                count:{
                    $sum:1
                }
            }
        }

    ], function (err, res) {
        if (err){
            console.log('outdoorDao.getOutdoorApplyCount Error'+err);
            return cb(err,null);
        }

        return cb(err,res);
    })
    //return this.count(cb).where('topicId').in(topicIds).aggregate().group('id').exec(cb);
}


mongoose.model('Answers',Answers);
