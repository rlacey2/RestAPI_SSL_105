myApp.controller('LoginCtrl', ['$rootScope','$scope', '$window', '$location', 'UserAuthFactory', 'AuthenticationFactory',  
  function($rootScope, $scope, $window, $location, UserAuthFactory, AuthenticationFactory ) {
		
    $scope.user = {
      username: 'rlacey2@example.com',
      password: 'pass2'
    };
 
    $scope.login = function() {
 
      var username = $scope.user.username;
      var password = $scope.user.password;
			
			$scope.message = "";
 
      if (username !== undefined && password !== undefined) {
				$scope.message = "Calling the server ...";
        UserAuthFactory.login(username, password).then(function(data) {  // rlacey changed this from success, error to then/catch
          // the user is legit
					// moved to UserAuthFactory
					/*
          AuthenticationFactory.isLogged = true;
          AuthenticationFactory.username = data.user.username;
          AuthenticationFactory.userRole = data.user.role;
					AuthenticationFactory.userId = data.user.id;
 
          $window.sessionStorage.token = data.token;
          $window.sessionStorage.username = data.user.username; // to fetch the user details on refresh
          $window.sessionStorage.userRole = data.user.role;     // to fetch the user details on refresh
          $window.sessionStorage.userId = data.user.id;
					*/
 
					
          $location.path("/");
 
        },
				function(error)
				{
					//alert('Oops something went wrong!, is the server running, credentials correct?');
					$scope.message = "Oops something went wrong!, is the server running, credentials correct?";
				}
				
				) ;
      } else {
        alert('Invalid credentials');
      }
 
    };
 
  }
]);