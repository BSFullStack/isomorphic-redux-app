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
    answerTime:String, //回答时间

    updateTime:String //更新时间

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
                "_id":"$topicId",
                "count":{
                    $sum:1
                }
            }
        }

    ], function (err, res) {
        let topicArr = [];
        if (err){

            return cb(err,null);
        }
        if(!res){
            topicArr = topicIds.map((topicId)=>{
                return {
                    _id:topicId,
                    count:0
                }
            });
        }else{
           topicArr = topicIds.map((topicId)=>{
                let target = _.find(res,(item)=>{
                    return item._id == topicId;
                });
                if(!target){
                    target = {
                        _id:topicId,
                        count:0
                    }
                }
                return target;
            });
        }

        return cb(err,topicArr);
    })

}
Answers.statics.getAllByTopicId=function(topicId,cb){

    return this.find({topicId},cb)

}


mongoose.model('Answers',Answers);
