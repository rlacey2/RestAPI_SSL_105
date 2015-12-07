var jwt = require('jwt-simple');
var _ = require('lodash');


var user = require('./users.js'); // temp db of users

var auth = {
        login: function(req, res) {

console.log("need to store the token in db, if going to invalidate/recall later"); //		
	
            var username = req.body.username || '';
            var password = req.body.password || '';
            if (username == '' || password == '') {
                res.status(401);
                res.json({
                    "status": 401,
                    "message": "Invalid credentials"
                });
                return;
            }
            // Fire a query to your DB and check if the credentials are valid
						
            var dbUserObj = auth.validate(username, password);
            if (!dbUserObj) { // If authentication fails, we send a 401 back
                res.status(401);
                res.json({
                    "status": 401,
                    "message": "Invalid credentials"
                });
                return;
            }
            if (dbUserObj) {
                // If authentication is success, we will generate a token
                // and dispatch it to the client
                res.json(genToken(dbUserObj));
            }
        },
        validate: function(username, password) { // check username and password pair
					console.log("validate() ££££££££££££££££££££££££££");
					console.log("validate = " + username);
            // spoofing the DB response for simplicity
						// console.log("database call required to validate user");
						
						var users = user.getAll2();
						var dbUserObjN = _.filterByValues(user.getAll2(), "username",  [username] );		
						console.log(dbUserObjN[0]);
						if ( dbUserObjN && dbUserObjN[0] && dbUserObjN[0].enabled) // we have this user
						{
										if (password === dbUserObjN[0].password)
													{
															// return restricted fields as the user object
															var dbUserObj = { // spoofing a userobject from the DB. 
																 // id: users[userIndex].id,
																	name: dbUserObjN[0].name,
																	role: dbUserObjN[0].role,
																	id: dbUserObjN[0].id,   // used for quick db select
																	username: username,
															};
															console.log(dbUserObj);
															return dbUserObj;
													}
													else
													{
														return null;
													}						
						}
						else
							return null;
	 
        },
				
        validateUser: function(username) { // check if a username exists and return the user object
						
            // spoofing the DB response for simplicity
            var dbUserObj = { // spoofing a userobject from the DB. 
                name: 'rlacey2',
                role: 'user',   // change this role to test admin api i.e. invalidate
                username: 'rlacey2@example.com'
            };
					console.log("validateUser() spoof db search, assuming username is unique for search");
					console.log("username = " + username);
				//	console.log("user.getAll2() = " );
				//	console.log( user.getAll2());		
					
					// array returned here
				 	var dbUserObj = _.filterByValues(user.getAll2(), "username",  [username] );				
						
						console.log("dbUserObj = "  );
						console.log(  dbUserObj[0]);
            return dbUserObj[0];
        },
    }
    // private methods
function genToken(user) {
    var expires = expiresIn(7); // 7 days
 
		// 2nd parameter is the token, user object is inside this token
    var token = jwt.encode({
        exp: expires,
				user: user                // added for better security
    }, require('../config/secret')());
		
    return {
        token: token,
        expires: expires,
        user: user
    };
}

function expiresIn(numDays) {
    var dateObj = new Date();
    return dateObj.setDate(dateObj.getDate() + numDays);
}

_.mixin({
	// http://stackoverflow.com/questions/17251764/lodash-filter-collection-using-array-of-values
	// moved to this
	//http://jsfiddle.net/plantface/rw6jdkpg/
	
	//returns an array, so if expecting one match take [0]
	
    'filterByValues': function (collection, key, values) {
        return _.filter(collection, function (o) {
            return _.contains(values, resolveKey(o, key));
        });
    }
});

function resolveKey(obj, key) {
    if (obj == null || key == null) {
        return undefined;
    }
    var resolved = undefined;
    if (typeof key == 'function') {
        resolved = key(obj);
    } else if (typeof key == 'string') {
        resolved = obj[key];
        if (resolved == null && key.indexOf(".") != -1) {
            resolved = _.deepGet(obj, key);
        }
    }
    return resolved;
}

module.exports = auth;