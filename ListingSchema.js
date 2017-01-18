/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/* Create your schema */
var listingSchema = new Schema({
  /* your code here */
    code: String,
    name: String,
    coordinates: {latitude: Number, longitude: Number},
    address: String,
    updated_at: String,
    created_at: String
});

function getTime(){
    var time = new Date();
    var month = "January";
    switch (time.getMonth()) {
        case 1: {month = "February"; break;}
        case 2: {month = "March"; break;}
        case 3: {month = "April"; break;}
        case 4: {month = "May"; break;}
        case 5: {month = "June"; break;}
        case 6: {month = "July"; break;}
        case 7: {month = "August"; break;}
        case 8: {month = "September"; break;}
        case 9: {month = "October"; break;}
        case 10: {month = "November"; break;}
        case 11: {month = "December"; break;}
    }
    return month + " " + time.getDate() + " " + time.getFullYear() + " at " + time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
}

/* create a 'pre' function that adds the updated_at (and created_at if not already there) property */
listingSchema.pre('save', function(next) {
  /* your code here */
  if (this.name === undefined || this.code === undefined){
      var error;
      if (this.name === undefined){
          error = new Error("Name is Undefined");
      }
      if (this.code === undefined){
          error = new Error("Code is Undefined");
      }
      next(error);
  }

  if (this.created_at == undefined || this.created_at.maxLength === 0) {
      this.created_at = getTime();
  }
    this.updated_at = getTime();
    next();

});

/* Use your schema to instantiate a Mongoose model */
var Listing = mongoose.model('Listing', listingSchema);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = Listing;
