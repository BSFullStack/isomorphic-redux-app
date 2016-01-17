import express from 'express';
import mongoose from 'mongoose';

const router = express.Router();
const User = mongoose.model('User');

module.exports= function (app) {
    app.use("/logout",router);
};
//用户登录
router.post('/api', function (req, res) {
    res.session.user = null;
    res.session.error = null;
    res.redirct("/");
});
