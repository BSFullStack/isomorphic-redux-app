import mongoose , { Schema } from 'mongoose';
import async from 'async';
import moment from 'moment';
import _ from 'lodash';
const TopicSchema = new Schema({
    id:String,
    title:String,
    content:String,
    typeId:String, //话题类型
    userId:String,
    viewtotals:Number,
    status:Number,
    createTime:{
        type:Date,
        default:Date.now
    },
    updateTime:{
        type:Date,
        default:Date.now
    }
});
//发表话题
/*TopicSchema.methods.publish = function(cb){
    this.model('Topic').save(cb)
};*/

//分页查询
TopicSchema.statics.get = function({ pageIndex , pageSize = 15, queryParam } , cb ){
    const User = mongoose.model('User');
    const Answers = mongoose.model('Answers');
    const { updateTime , ...other } = queryParam ;
    const that = this;
    async.waterfall([
        function(cb){
            that.count((err,count)=>{
                cb(err,count)
            });
        },
        function(count,cb){

           that.find({...other}).sort({"updateTime":-1}).limit(pageSize).exec((err,topics)=>{
                cb(err,count,topics)
           })
        },
        function(count,topics,cb){
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
            let topicIds = _.union(_.map(topics,item=>item.id));

            Answers.getAllByTopicIds(topicIds,(err,entity)=>{

                cb(err,count,topics);
            });
        }

    ],function(err,count,result){

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
