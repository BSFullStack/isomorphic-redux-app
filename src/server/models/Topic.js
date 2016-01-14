import mongoose , { Schema } from 'mongoose';
import moment from 'moment';
import _ from 'lodash';
const TopicSchema = new Schema({
    id:String,
    title:String,
    content:String,
    typeId:String, //话题类型
    userId:String,
    viewtotals:Number,
    comments:Array,
    status:Number,
    createTime:{
        type:Date,
        default:Date.now
    },
    editTime:{
        type:Date,
        default:Date.now
    }
});
//发表话题
/*TopicSchema.methods.publish = function(cb){
    this.model('Topic').save(cb)
};*/

//分页查询
TopicSchema.statics.get = function({ pageIndex , pageSize , queryParam } , cb ){
    const User = mongoose.model('User');
    const { editTime , ...other } = queryParam ;
    //获取总数
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

    });



}
mongoose.model('Topic',TopicSchema);
