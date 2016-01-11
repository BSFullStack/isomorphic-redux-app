import express from 'express';
import glob from 'glob';
import mongoose from 'mongoose';
export default  function(app,config){

    mongoose.connect(config.db);

    const db = mongoose.connection;

    db.on('error', function () {
      throw new Error('unable to connect to database at ' + config.db);
    });

}
