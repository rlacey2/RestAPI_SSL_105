# RestAPI_SSL_105_db

RestAPI to resources - angular, express, node, SSL

based on: 

http://thejackalofjavascript.com/architecting-a-restful-node-js-app/

with updates as in comments to remove security flaws in auth.js in the server folder

HTTPS implmented rather than HTTP, 

Follow the steps from:
http://www.hacksparrow.com/express-js-https.html

You may get a browser warning initially on the https usage due to the nature of the certificate, proceed to accept the route(s).


port 3443  = server with REST routes and public pages


ngClient is now moved under the server folder, with

app.use(
			"/", //the URL throught which you want to access to you static content
			express.static(__dirname + '/_ngClient')  //where your static content is located in your filesystem
				); 
 
to server up the web pages
 
 
Implemented on a windows system.

Hence, curl examples are modified for windows use.


Please note the following folders are not pushed to the repo  

server\node_module
ngClient\node_module

Hence, they need to be rebuilt after installing the repo

Open a cmd window at the folder server and run the following command:

			npm install --save  
		 
		 
To run the server on port 3443: 

			node server.js or nodemon server.js  (if nodemon installed)
			
			In your browser enter https://localhost:3443/test to test the server is running.
			


Open a cmd window at the folder ngClient and run the following command:

     npm install --save  
		 
To run the client on port 2772, type at the command prompt in ngClient:

	   gulp

		 enter http://localhost:2772/#/login in a browser to test the client
		 
		 
		 
 



 
#Some other changes:

Building on the 101 version.
 
Added ngIdle to the client side for timeouts.
see http://hackedbychinese.github.io/ng-idle/  (Modified to use newer uibModal)


used $q to move login success to UserAuthFactory to record data i.e. the complementary of logout, inconsistent to have this in the controller auth.controller.js



 

Added Account dropdown menu with:
	1) Settings page (view only) click on the user's name 
	2) Logout

  

Added users menu
Add users with dummy menu for tasks
Added contacts menu

4 users  

rlacey1@example.com, password = pass1
rlacey2@example.com, password = pass2    also an admin
rlacey3@example.com, password = pass3
rlacey4@example.com, password = pass4

see users.js,  extra attributes added, not all used yet.
Note the salt is not used yet.



server\routes\auth.js:
_.mixin added

validate() and validateUser() have been changed to spoof db logic with the 4 users as above




in users.js have added getAccountSettings() to respond to the route /api/v1/user/:id

This is intended to allow any user to get back their own settings or and admin.

The route validation does the authentication with the session token, but unlike admin authorisation
the user check to see if the user is allowed the data is in getAccountSettings.

Ideally would like this in validateRequest.js, but the route parameter is appears to only be available via .param 
the validation. 

One solution maybe to have multiple validators and allocated to different route prefixes.
Do not want to go there yet in this small demo.

 

CURL Scripts in  \private\curl_scripts

rlacey2@example.com is an admin

run login2.bat to get a session token

paste the token into returned into adminAllUsers2.bat and run, you should see a json list of users.
This is correct as the user is an admin.


rlacey1@example.com is an ordinary user

paste the token into returned into adminAllUsers1.bat and run, you should see an error message
This is correct as the user is an ordinary user with not authorisation on the route.
