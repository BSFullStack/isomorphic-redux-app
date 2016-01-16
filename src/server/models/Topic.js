import mongoose , { Schema } from 'mongoose';
import async from 'async';
import moment from 'moment';
import _ from 'lodash';
/**
 * Topic实体
 * Topic & Tag == many to manny
 */
const TopicSchema = new Schema({
    id:String,
    title:String,
    content:String,
    typeId:String, //话题类型
    userId:String,
    viewtotals:Number,
    star:{
        type:Number,
        default:0
    },
    status:Number,
    createTime:{
        type:Date,
        default:Date.now
    },
    updateTime:{
        type:Date,
        default:Date.now
    },
    tagIds:Array //标签ID数组
});
//发表话题
/*TopicSchema.methods.publish = function(cb){
    this.model('Topic').save(cb)
};*/



/**
 * 查找当前topic所属标签
 * @return {[type]} [description]
 */
TopicSchema.statics.getAllTagsByTopicId=function(topicId,cb){
    const TopicTagRelation = mongoose.model('TopicTagRelation');
    TopicTagRelation.getAllTagsByTopicId(topicId,cb);
}

TopicSchema.statics.getTags = function(topicIds,cb){
    const TopicTagRelation = mongoose.model('TopicTagRelation');

    TopicTagRelation.getAllTagsByTopicIds(topicIds,cb);
}

/**
 * 详情页接口
 *     参数：topicId
 */
TopicSchema.statics.getDetail = function(topicId , callback ){

    const User = mongoose.model('User');
    const Answers = mongoose.model('Answers');
    const Tag = mongoose.model('Tag');
    const that = this;

    async.waterfall([
        function (cb){ //获取topic实体
            that.findOne({id:topicId},(err,topic)=>{
                cb(err,topic.toObject());
            })
        }
        ,function (topic,cb){ //获取所属标签
            const { tagIds } = topic;
            Tag.getTagByIds({},tagIds,['name','id'],(err,tags)=>{
                 cb(err,topic,tags);
            });
        }
        ,function (topic,tags,cb){ //获取所属人
            const { userId } = topic;
            User.findOne({id:userId},'name id',(err,user)=>{
                cb(err,topic,tags,user)
            });
        }
        ,function (topic,tags,user,cb) { //获取回答数量
            let { id } = topic;

            Answers.getAllByTopicId(id,(err,answers)=>{
                console.log(answers);
                let _answers = answers.map((item)=>{
                     return item.toObject();
                });
               cb(err,topic,tags,user,_answers);
            });
        }
    ],function(err,topic,tags,user,answers){

        if(err){
            return callback(err);
        }

        //拼装数据并返回
        let topicMixins = _.assign(topic,{
            userInfo:user,
            answers,
            tags
        })
        callback(err,topicMixins);
    });



}


//分页查询
TopicSchema.statics.get = function({ pageIndex , pageSize = 15, queryParam } , callback ){
    const User = mongoose.model('User');
    const Answers = mongoose.model('Answers');
    const { updateTime , ...other } = queryParam ;
    const that = this;
    async.waterfall([
        function(cb){ //查询总数
            that.count((err,count)=>{
                cb(err,count)
            });
        },
        function(count,cb){ //分页处理
           that.find({...other}).sort({"updateTime":-1}).limit(pageSize).exec((err,topics)=>{
                cb(err,count,topics)
           })
        },
        function(count,topics,cb){ //查询人员信息
            //找到所有的userId
            let userIds = _.union(_.map(topics,(item)=>item.userId));
            User.getAllByIds({},'name  email id',userIds,(err,users)=>{

                let result =[] ,
                    _memorize = {};//缓存
                //遍历
                topics.map((topic)=>{
                    let oTopic = topic.toObject()
                    let user = _memorize[topic.userId]  || _.find(users,(user)=>{
                        return user.id == topic.userId;
                    });

                    oTopic.userInfo = user;
                    _memorize[topic.userId] = user;
                    result.push(oTopic);
                });

                cb(err,count,result)
            });
        }
        ,function(count,topics,cb){ //获取回答数量
            //找到所有的userId
            let topicIds = topics.map((item)=>{return item.id});

            Answers.getAllByTopicIds(topicIds,(err,entity)=>{

                entity.forEach((answ)=>{
                    const { _id ,count } = answ;
                    let target = _.find(topics,(item)=>{
                        return item.id == _id;
                    }) || {};
                    target.answersCount = count;
                });

               cb(err,count, topicIds,topics);
           });
        }
        ,function(count, topicIds, topics,cb){ //查询所属标签

            let topicIdss = topics.map((item)=>{return item.id});

            that.getTags(topicIds,(err,tags)=>{
                //遍历topics
                topics.map((topic)=>{
                    const { tagIds } = topic;
                    const tagArr = tagIds.map((tagId)=>{
                        return  _.find(tags,(tag)=>{
                            return tag.id == tagId;
                        }) || { id:"0000000000-0000000000",name:"数据异常"};
                    });
                    topic.tags = tagArr;
                });

                cb(null,count,topics);
            });

        }

    ],function(err,count,result){
        return callback(err,{topics:result,count})
    });
   /* //获取总数
    this.count((err,count)=>{
        if(err){
            return cb(err);
        }
        if(pageIndex == 1 || !editTime){
            let result =[] ,_memorize = {};//缓存
            this.find({...other}).sort({"editTime":-1}).limit(pageSize).find((err,list)=>{

                //找到所有的userId
                let userIds = _.union(_.map(list,(item)=>item.userId));
                User.getAllByIds({},'name  email id',userIds,(err,users)=>{

                    //遍历
                    list.map((topic)=>{
                        let oTopic = topic.toObject()
                        let user = _memorize[topic.userId]  || _.find(users,(user)=>{
                            return user.id == topic.userId;
                        });
                        oTopic.answeredTime = moment(oTopic.createTime).format("YYYY-MM-DD HH:mm:ss");
                        oTopic.userInfo = user;
                        _memorize[topic.userId] = user;
                        result.push(oTopic);
                    });
                    return cb(err,{topics:result,count})

                });
            });

        }else{
            this.find({"editTime":{"$gt":editTime},...other}).sort({"editTime":-1}).limit(pageSize).find((err,list)=>{
                 return cb(err,{topics:list,count})
            });
        }

    });*/



}
mongoose.model('Topic',TopicSchema);
