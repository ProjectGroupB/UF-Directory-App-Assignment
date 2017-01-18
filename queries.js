/* Fill out these functions using Mongoose queries*/
var
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Listing = require('./ListingSchema.js'),
    config = require('./config'),
    assert = require('assert'),
    json = require('./listings.json');
mongoose.connect(config.db.uri);
var database = mongoose.connection;
database.on('error', console.error.bind(console, 'error connecting')); // added a connection error check

var listing = mongoose.model('Listing', Listing.listingSchema);


var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
    listing.find({ name: 'Library West' }, function(err, name) {
        if (err) throw err;

        console.log(name);
    });
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
    listing.find({ code: 'CABL' }, function(err, name) {
        if (err) throw err;

        console.log(name);
    });

    listing.findOneAndRemove({ code: 'CABL' }, function(err) {
        if (err) throw err;

        // CABL deleted
        console.log('CABL deleted!');
    });

};
var updatePhelpsMemorial = function() {
  /*
    Phelps Memorial Hospital Center's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */

    listing.findOneAndUpdate({ name: 'Phelps Laboratory' }, { address: '102 Phelps Lab Gainesville, FL 32611' }, function(err, user) {
        if (err) throw err;

        // Address updated
        console.log(user);
    });

};
var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
    listing.find({}, function(err, all) {
        if (err) throw err;

        // all users
        console.log(all);
    });
};

findLibraryWest();
removeCable();
updatePhelpsMemorial();
retrieveAllListings();