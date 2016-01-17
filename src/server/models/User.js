import mongoose , { Schema } from 'mongoose';
import { USER } from '../constants/index';
const UserSchema = new Schema({
    id:String,
    name:String,
    email:String,
    password:String,
    registerTime:{
        type:Date,
        default:Date.now
    },
    role:{
        type:String,
        default:USER.ROLE.NORMAL
    },
    status:{
        type:String,
        default:USER.STATUS.ACTIVE
    },
    score:{
        type:Number,
        default:0
    },
    tag:{
        type:String,
        default:""
    }

});
UserSchema.statics.checkUser=function(params,cb){
    return this.findOne(params,'id name',cb);
}
UserSchema.statics.getOne=function(params,cb){
    return this.findOne(params,cb);
}
UserSchema.statics.getAllByIds=function(params,fieldsStr,ids,cb){
    return this.find(params).select(fieldsStr).where('id').in(ids).exec(cb);
}


mongoose.model('User',UserSchema);
