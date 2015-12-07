
 var _ = require('lodash');

var users = {
	
    getAll2: function( ) {
        return  data; // Spoof a DB call
        
    },	 
		
		
		// all below here are returning json on the response stream
		
		
		getAccountSettings :  function(req, res) {
			 // should only return to an admin or the owner of the id
			 
			 // not happy having to do the authorisation here
			console.log("getAccountSettings idRequested " + req.idRequested);
			console.log("getAccountSettings userRequesting  " + req.userRequesting.id);
			
			// this is to prevent a hack of the id by another user to the endpoint
			
			// not entirely happy placing this authorisation here, we must check if the request
			// is from an admin or the the owner of the data.
			// the decoded session token has been used to validate the user i.e. the username was encryped.
			// We are only at this point with an authenicated request
			// now check the privileges of the user to the data
			
			if ((req.userRequesting.role == "admin") || (req.idRequested == req.userRequesting.id))
			{ // allow data access
				    var id = req.params.id;
						var user = data[id-1]; // Spoof a DB call
						res.json(user);
						return;
			}
			else
			{
										res.status(403);
											res.json({
													"status": 403,
													"message": "Not Authorized"
											});
											return;				
			}
		 

    },
		
		
		
	
    getAll: function(req, res) {
        var allusers = data; // Spoof a DB call
        res.json(allusers);
    },
    getOne: function(req, res) {
        var id = req.params.id;
        var user = data[0]; // Spoof a DB call
        res.json(user);
    },
    create: function(req, res) {
        var newuser = req.body;
        data.push(newuser); // Spoof a DB call
        res.json(newuser);
    },
    update: function(req, res) {
        var updateuser = req.body;
        var id = req.params.id;
        data[id] = updateuser // Spoof a DB call
        res.json(updateuser);
    },
    delete: function(req, res) {
        var id = req.params.id;
        data.splice(id, 1) // Spoof a DB call
        res.json(true);
    },
		
	    getList: function(req, res) {
        var allusers = data; // Spoof a DB call
				
				var filteredFields = _.map(allusers,function(user,index)
				{
					 return { "username" : user.username, "role" : user.role};
				});
				
				
        res.json(filteredFields);
    },	
		
		
};
var data = [  
{
    "name": "rlacey1",
		"username": "rlacey1@example.com",
		"password" : "pass1",  // hash and salt
		"salt" : "sfsdfsjfdfdffhketcwetc",
		"token" : "",
		"role" : "user",
    "id": "1",
		"revokeToken" : false,
		"enabled": true,
		"timeout" : -1,
},  
{
    "name": "rlacey2",
		"username": "rlacey2@example.com",
		"password" : "pass2",  // hash and salt
		"salt" : "sfsdfsjfhketcwetc",
		"token" : "",
		"role" : "admin",
    "id": "2",
		"revokeToken" : false,
		"enabled": true,
		"timeout" : -1,
}
,  
{
    "name": "rlacey3",
		"username": "rlacey3@example.com",
		"password" : "pass3",  // hash and salt
		"salt" : "sfsdfsjfhketcwetc",
		"token" : "",
		"role" : "user",
    "id": "3",
		"revokeToken" : true,
		"enabled": false,
		"timeout" : -1,
},

{
    "name": "rlacey4",
		"username": "rlacey4@example.com",
		"password" : "pass4",  // hash and salt
		"salt" : "sfsdfsjfhketcwetc",
		"token" : "",
		"role" : "user",
    "id": "4",
		"revokeToken" : true,
		"enabled": true,
		"timeout" : -1,
}




];
module.exports = users;