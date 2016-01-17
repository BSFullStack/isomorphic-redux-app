import mongoose , { Schema } from 'mongoose';

import _ from 'lodash';
/**
 * 话题标签多对多关系中间实体
 */
const TopicTagRelation = new Schema({
    id:String, //id
    topicId:String, // topicId
    tagId:String // tagId
});

TopicTagRelation.statics.getAllTagsByTopicId = function(topicId,cb){
    const Tag = mongoose.model('Tag');

    this.find({topicId}).exec((err,relations)=>{
        if(err){
             return cb(err);
        }
        let tagIds = _.union(_.map(relations,item=>item.tagId));
        //根据Ids数组查询Tag
        Tag.getTagByIds({},tagIds,['name','id'],cb);
    })
}
//根据topicIds获取所有的tagsIds
TopicTagRelation.statics.getAllTagsByTopicIds = function(topicIds,cb){
    const Tag = mongoose.model('Tag');

    this.where('topicId').in(topicIds).find((err,relations)=>{

        if(err){
             return cb(err);
        }
        let tagIds = _.union(_.map(relations,item=>item.tagId));

        //根据Ids数组查询Tag
        Tag.getTagByIds({},tagIds,['name','id'],cb);
    })
}

//编译Tag实体
mongoose.model('TopicTagRelation',TopicTagRelation);
