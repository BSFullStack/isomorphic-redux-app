import express from 'express';
import  mongoose from 'mongoose';
import bodyParser from 'body-parser';

const  router = express.Router();
const jsonParser = bodyParser.json()


module.exports= function (app) {

    app.use("/books",router);
};

router.post('/get', function (req, res) {
    const books = [];
    for(let i = 0 ; i < 10 ;i++){
        books.push(
            {
                name:"第"+i+"本"
            }
        );
    }
    res.status(200).json({bl:"1"});
});
