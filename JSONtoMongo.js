'use strict';
/*
 Import modules/files you may need to correctly run the script.
 Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Listing = require('./ListingSchema.js'),
    config = require('./config'),
    assert = require('assert'),
    json = require('./listings.json');


/* Connect to your database */
mongoose.connect(config.db.uri);
var database = mongoose.connection;
database.on('error', console.error.bind(console, 'error connecting:')); // added a connection error check
/*
 Instantiate a mongoose model for each listing object in the JSON file,
 and then save it to your Mongo database
 */
var listing = mongoose.model('Listing', Listing.listingSchema);
var data;
fs.readFile('./listings.json', 'utf8', function read(err, content) {
    if(err) {
        throw err;
        console.log('error reading json file');
    }
    console.log('data read');
    data = JSON.parse(content);
    //console.log(data.entries[0]);

    //console.log(data.entries.length);
    for(var i = 0; i < data.entries.length; i++) {
        //console.log(i);
        var entry = new listing(data.entries[i]).save(function(err) {
            if(err) console.log('file created');
        });
    }
    console.log("json data moved successfully moved to database");
    database.close(); //closes the connection when done
});
/*

 */
/*
 Once you've written + run the script, check out your MongoLab database to ensure that
 it saved everything correctly.
 */
