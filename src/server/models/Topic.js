import mongoose , { Schema } from 'mongoose';

const TopicSchema = new Schema({
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
mongoose.model('Topic',TopicSchema);
