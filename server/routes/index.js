// middleware logic to preproccess some routes



var express = require('express');
var router = express.Router();
var auth = require('./auth.js');

var validateRequest = require('../middlewares/validateRequest')

// some files that are simulating the database
var products = require('./products.js');
var user = require('./users.js');
var contacts = require('./contacts.js');

 


// route middleware to validate :id
router.param('id', function(req, res, next, id) {
      req.idRequested = id; // if there is an id in the route, store it for later user
			console.log("************** idRequested = " + req.idRequested  + " ************** ");
      next(); 
});



/*
* Routes that can be accessed by any one
*/
router.post('/login', auth.login);
router.get('/contacts', contacts.getAll);
router.get('/test', function(req,res) { res.send("<h1>Test Response</h1>");} );
/*
* User Routes that can be accessed only by authenticated users

for typical user of the system
*/
router.get('/api/v1/products', products.getAll);
router.get('/api/v1/product/:id', products.getOne);
router.post('/api/v1/product/', products.create);
router.put('/api/v1/product/:id', products.update);
router.delete('/api/v1/product/:id', products.delete);

/*
* User Account Routes that can be accessed only by authenticated & authorized users
  to their own account settings (for example)
  
*/

router.get('/api/v1/user/:id', user.getAccountSettings); // notice not admin 

/*
* Admin Routes that can be accessed only by authenticated & authorized users
  
*/

// rl, router order important
router.get('/api/v1/admin/users/list', user.getList); // restricted fields

router.get('/api/v1/admin/users', user.getAll);
router.get('/api/v1/admin/user/:id', user.getOne);
router.post('/api/v1/admin/user/', user.create);
router.put('/api/v1/admin/user/:id', user.update);
router.delete('/api/v1/admin/user/:id', user.delete);




module.exports = router;