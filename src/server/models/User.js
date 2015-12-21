import mongoose , { Schema } from 'mongoose';

const UserSchema = new Schema({
    email:String,
    password:String
});
//注册到mongoose的model里
mongoose.model('User',UserSchema);
