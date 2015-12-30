import mongoose , { Schema } from 'mongoose';

const UserSchema = new Schema({
    id:String,
    name:String,
    email:String,
    password:String,
    registerTime:{
        type:Date,
        default:Date.now
    },
    role:String,
    status:String,
    score:Number,
    tag:String

});
//注册到mongoose的model里
mongoose.model('User',UserSchema);
