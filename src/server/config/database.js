import express from 'express';
import glob from 'glob';
import mongoose from 'mongoose';
export default  function(app,config){

    mongoose.connect(config.db);

    const db = mongoose.connection;

    db.on('error', function () {
      throw new Error('unable to connect to database at ' + config.db);
    });
    const models = glob.sync(config.root + '/src/server/models/*.js');
    models.forEach(function (model) {
       require(model);
    });

    const controllers = glob.sync(config.root + '/src/server/controllers/*.js');

    controllers.forEach(function (controller) {
        require(controller)(app);
   });
}
