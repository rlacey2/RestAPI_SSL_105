
 var _ = require('lodash');

var contacts = {
	
  
		
		// all below here are returning json on the response stream
		
	
    getAll: function(req, res) {
        var allcontacts = data; // Spoof a DB call
        res.json(allcontacts);
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
    }
		
};
var data = [  
{
    "name": "Joe Bloggs",
		"email": "jbloggs@example.com",
},  
{
    "name": "Patrick Murphy",
		"email": "pmurphy@example.com",
} 
];
module.exports = contacts;