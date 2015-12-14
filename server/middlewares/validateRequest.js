var jwt = require('jwt-simple');
var validateUser = require('../routes/auth').validateUser;

// this file has been modified since 101, it is now returning a hash of function(s) 
// hence the requires in server.js require the checkout method to be explicit

var validateRequest =  {
  
			 validateRequest : function(req, res, next) {
		
		// this function appears to be called before router.params() hence extra attributes not available
		
			// When performing a cross domain request, you will receive
			// a preflighted request first. This is to check if our the app
			// is safe. 
			// We skip the token outh for [OPTIONS] requests.
			//if(req.method == 'OPTIONS') next();
			
			
			console.log("req.url = " + req.url);
			console.log(req.params);

			var token = (req.body && req.body.access_token) || (req.query && req.query.access_token) || req.headers['x-access-token'];
	 
		 // var key = (req.body && req.body.x_key) || (req.query && req.query.x_key) || req.headers['x-key'];
			
	console.log("********* validateRequests *******");	
	console.log("check if the token has been revoked LATER");		
	//console.log(token);		
	 
			if (token) {	// key is now encoded in token	and is decoded.user.name below	
					try {
					 
							
							var decoded = jwt.decode(token, require('../config/secret.js')());
							
							
							if (decoded.exp <= Date.now()) {
									res.status(400);
									res.json({
											"status": 400,
											"message": "Token Expired"
									});
									return;
							}
							
							// Authorize the user to see if s/he can access our resources
							var dbUser = validateUser(decoded.user.username); // The key would be the logged in user's username
							
						 //	need to make this asynch handling???
							
							
							
							 console.log("===========================================");	
							 console.log(dbUser);
						if (dbUser) { // we have a valid user from a the encrypted username
							
							
								var params_id =  req.id  ||  -1 ; // used on owner routes 
								var isAdminRoute = req.url.indexOf('admin') >= 0 ? true : false;
							 
								
								console.log("params_id    = " + params_id);
								console.log("admin route  = " + isAdminRoute);
						 
								console.log("route        = " + req.url);
								console.log("role         = " + dbUser.role);
								
		 

										
								//  if ((isAdminRoute && dbUser.role == 'admin') ||		
									if (( dbUser.role == 'admin' ) ||  // admins are allowed on every authenticated route
													
													( ! isAdminRoute  && req.url.indexOf('/api/v1/') >= 0)) { //req.url.indexOf('/api/v1/') >= 0 has to be true if in this file

											// append decode information into the request for the next stage (if needed see usersgetAccountSettings
											req.userRequesting  =  dbUser; // pass this on for later validation if needed
											
											next(); // To move to next middleware
									} else {
												
											res.status(403);
											res.json({
													"status": 403,
													"message": "Not Authorized"
											});
											return;
									}
							} else {
									
									// No user with this name exists, respond back with a 401
									res.status(401);
									res.json({
											"status": 401,
										 // "message": "Invalid User" gives information to a hacker i.e. username or lack of
											"message": "Invalid credentials"
									});
									return;
							}
					} catch (err) {
							res.status(500);
							res.json({
									"status": 500,
									"message": "Oops something went wrong",
									"error": err
							});
					}
			} else {
					res.status(401);
					res.json({
							"status": 401,
							"message": "Invalid Token or Key"
					});
					return;
			}
	}  
}


 
module.exports = validateRequest;