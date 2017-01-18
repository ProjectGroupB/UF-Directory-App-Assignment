//This file holds any configuration variables we may need
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//store your MongoLab uri here

// I created an account with mlab to start a database. I added a user to that database.
// Username: BootcampUser
// Password: bootcampPassword
module.exports = {
    db: {
        uri: 'mongodb://BootcampUser:bootcampPassword@ds117109.mlab.com:17109/ufdirectorydatabase', //place the URI of your mongo database here.
    }
};

/* Now go to the JSONtoMongo.js file and include this file as a variable named 'config' with a require() */
