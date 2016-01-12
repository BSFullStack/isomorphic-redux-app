import mongoose , { Schema } from 'mongoose';

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
    const { editTime , category , ...other } = queryParam ;
    //获取总数
    this.count({category},(err,count)=>{
        if(err){
            return cb(err);
        }
        let list ;
        if(pageIndex == 1 || !editTime){
            list = this.find({...other}).sort({"editTime":-1}).limit(pageSize);
        }else{
            list = this.find({"editTime":{"$gt":editTime},...other}).sort({"editTime":-1}).limit(pageSize);
        }
        //return cb(err,data:{topics:list,count})
    });



}
mongoose.model('Topic',TopicSchema);
