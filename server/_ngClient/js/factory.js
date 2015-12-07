// indirectly hide the routes from the client view etc

myApp.factory('dataFactory', function($http) {
  /** https://docs.angularjs.org/guide/providers **/
 // var urlBase = 'http://localhost:3000/api/v1/products';
	var urlBase = '/api/v1/products';
  var _dataFactory = {};
 
  _dataFactory.getProducts = function() {
    return $http.get(urlBase);
  }; 
 
  return _dataFactory;
});


myApp.factory('dataFactoryUsers', function($http) {
 
	var urlBase = 'api/v1/admin/users';
  var _dataFactory = {};
 
 
	  _dataFactory.getUsers = function() {
    return $http.get(urlBase);
		};
		
	_dataFactory.getUsersList = function() {
		   // send minimal information back
       return $http.get(urlBase + "/list"); //? best practise annotating the route 
			/* 
						.then(function successCallback(response) {
									// this callback will be called asynchronously
									// when the response is available
									alert("success");
								}, function errorCallback(response) {
									// called asynchronously if an error occurs
									// or server returns response with an error status.
									alert("failure");
								}); 
								*/
  }; 
	
	_dataFactory.getUsersAccountDetails = function(userId) {
		 
 return $http.get("/api/v1/user/" + userId );
 
	};
 
  return _dataFactory;
});



myApp.factory('dataFactoryContacts', function($http) {
 
	var urlBase = 'contacts';
  var _dataFactory = {};
 
 
	  _dataFactory.getUsers = function() {
    return $http.get(urlBase);
		};
		
	_dataFactory.getContacts = function() {
		   // send minimal information back
       return $http.get(urlBase);
			/* 
						.then(function successCallback(response) {
									// this callback will be called asynchronously
									// when the response is available
									alert("success");
								}, function errorCallback(response) {
									// called asynchronously if an error occurs
									// or server returns response with an error status.
									alert("failure");
								}); 
								*/
  }; 
 
  return _dataFactory;
});


