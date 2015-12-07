var products = {
    getAll: function(req, res) {
			console.log("products.getAll()")
        var allProducts = data; // Spoof a DB call
        res.json(allProducts);
    },
    getOne: function(req, res) {
        var id = req.params.id;
        var product = data[0]; // Spoof a DB call
        res.json(product);
    },
    create: function(req, res) {
        var newProduct = req.body;
        data.push(newProduct); // Spoof a DB call
        res.json(newProduct);
    },
    update: function(req, res) {
        var updateProduct = req.body;
        var id = req.params.id;
        data[id] = updateProduct // Spoof a DB call
        res.json(updateProduct);
    },
    delete: function(req, res) {
        var id = req.params.id;
        data.splice(id, 1) // Spoof a DB call
        res.json(true);
    }
};


// data to simulate db call
var data = [
{
    name: 'product 1',
    id: '1'
}, {
    name: 'product 2',
    id: '2'
}, {
    name: 'product 3',
    id: '3'
},
{
    name: 'product 11',
    id: '11'
}, {
    name: 'product 12',
    id: '12'
}, {
    name: 'product 13',
    id: '13'
},
{
    name: 'product 11',
    id: '21'
}, {
    name: 'product 22',
    id: '22'
}, {
    name: 'product 23',
    id: '23'
}
,
{
    name: 'product 31',
    id: '31'
}, {
    name: 'product 32',
    id: '32'
}, {
    name: 'product 33',
    id: '33'
}
 
,
{
    name: 'product 31',
    id: '31'
}, {
    name: 'product 32',
    id: '32'
}, {
    name: 'product 33',
    id: '33'
}
 
,
{
    name: 'product 31',
    id: '31'
}, {
    name: 'product 32',
    id: '32'
}, {
    name: 'product 33',
    id: '33'
},
 
,
{
    name: 'product 31',
    id: '31'
}, {
    name: 'product 32',
    id: '32'
}, {
    name: 'product 33',
    id: '33'
}
];
module.exports = products;