import mongoose , { Schema } from 'mongoose';
import { TAG } from '../constants/tag';
import _ from 'lodash';
/**
 * 标签实体  与 topics 是多对多关系
 */
const Tag = new Schema({
    id:String, //id
    name:String, // 标签名称
    description:String, // 标签描述
    createTime:{  // 创建日期
        type:Date,
        default:Date.now
    },
    status:{ //标签状态  1 显示  2 已删除
        type:Number,
        default:TAG.STATUS.ENABLE
    },
    createUserId:String,
    topicIds:Array //话题ID数组

});

Tag.statics.getTagByIds=function(params,ids,fields,cb){
    const sFields = fields.join(' ');

    this.find({...params}).select(sFields).where('id').in(ids).find((err,doc)=>{

        if(err){
            return cb(err);
        }
        const tags = doc.map((tag)=>{
            return tag.toObject();
        })

        cb(err,tags);
    });
}
Tag.statics.getAll=function(cb){
    this.find({}).select('id name description').exec(cb)
}



//编译Tag实体
mongoose.model('Tag',Tag);
