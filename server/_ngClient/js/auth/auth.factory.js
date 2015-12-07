// global to pages
myApp.factory('AuthenticationFactory', function($window) {
	
	
 
    var auth = {
        isLogged: false,
				
        check: function() {
            if ($window.sessionStorage.token && $window.sessionStorage.username) 
						{
                this.isLogged = true;
            } else 
						{
                this.isLogged = false;
                delete this.username;
            }
        }
    }
    return auth;
});

// one user
myApp.factory('UserAuthFactory', function($window, $location, $http, AuthenticationFactory,$q,  Idle ) {
    return {
        login: function(username, password) {
					
					    var defer = $q.defer();

					
             $http.post('https://localhost:3443/login', {
                username: username,
                password: password
            }).then(function(response)
						{
									 
									AuthenticationFactory.isLogged = true;
									AuthenticationFactory.username = response.data.user.username;
									AuthenticationFactory.userRole = response.data.user.role;
									AuthenticationFactory.userId   = response.data.user.id;
				 
									$window.sessionStorage.token    = response.data.token;
									$window.sessionStorage.username = response.data.user.username; // to fetch the user details on refresh
									$window.sessionStorage.userRole = response.data.user.role;     // to fetch the user details on refresh
									$window.sessionStorage.userId   = response.data.user.id;								
 			            Idle.watch();  
							    defer.resolve(response);
						},
						function(error) {
							  defer.reject(error);
						});
						
						return defer.promise;
        },
				
	        login0: function(username, password) {
						
            return $http.post('https://localhost:3443/login', {
                username: username,
                password: password
            });
        },			
				
        logout: function() {
            if (AuthenticationFactory.isLogged) {
                AuthenticationFactory.isLogged = false;
                delete AuthenticationFactory.username; // hence the delete this.user above
                delete AuthenticationFactory.userRole;
								delete AuthenticationFactory.userId;
                delete $window.sessionStorage.token;
                delete $window.sessionStorage.username;
                delete $window.sessionStorage.userRole;
								delete $window.sessionStorage.userId;
								
								Idle.unwatch();
								
                $location.path("/login");
            }
        }
    }
});
myApp.factory('TokenInterceptor', function($q, $window) {
	// events on the response/request streams globally everytime
    return {
        request: function(config) {
            config.headers = config.headers || {};
            if ($window.sessionStorage.token) {
                config.headers['X-Access-Token'] = $window.sessionStorage.token;
              //  config.headers['X-Key'] = $window.sessionStorage.username;
                config.headers['Content-Type'] = "application/json";
            }
            return config || $q.when(config);
        },
        response: function(response) {
            return response || $q.when(response);
        }
    };
});