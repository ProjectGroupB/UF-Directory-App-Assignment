'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.schema,
    Listing = require('./ListingSchema.js'), 
    config = require('./config'),
    listArray;

/* Connect to your database */
mongoose.connect(config.db.uri);
var database = mongoose.connection;
database.on('error', console.error.bind(console, 'error connecting:'));

/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
 */
database.once('open', function() {
    console.log("connection established");
    fs.readFile("listings.json", "utf8", function (err, data) {
        console.log("reading json file");
        listArray = JSON.parse(data); // TODO this doesn't work. Everything I read says this should turn the json string data into an array. But all I can get is undefined
        for (var i = 0; i < listArray.length; i++){
            var jsonEntry = listArray[i];
            var entry  = new Listing();
            entry.name = jsonEntry.name;
            entry.code = jsonEntry.code;
            entry.address = jsonEntry.address;
            entry.latitude = jsonEntry.latitude;
            entry.longitude = jsonEntry.longitude;
            // TODO save the entry to the database
        }
    });
    database.close();
});





/* 
  Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */