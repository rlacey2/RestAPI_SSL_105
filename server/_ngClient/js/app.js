var myApp = angular.module('ngclient', ['ngRoute',
   'ui.bootstrap',            // dropdown menus without jquery
	 'ngIdle'                   // used for timeout/idle
	 ]);
 
 
 myApp.config([ 'IdleProvider', '$routeProvider', '$httpProvider', function( IdleProvider, $routeProvider, $httpProvider) {
 

 
  $httpProvider.interceptors.push('TokenInterceptor');
	
 	 
		// ngIdle, appears it has to go here, can use Idle.setIdle(10) ;  Idle.setTimeout(20);
		var idleSeconds = 1200; // 20 minutes
		console.log("Idle time 20 minutes");
		IdleProvider.idle(idleSeconds);          // seconds if idle to give warning
		IdleProvider.timeout(30);                 // warning duration before logging out
	 
  $routeProvider
    .when('/login', {
      templateUrl: 'partials/login.html',
      controller: 'LoginCtrl',
      access: {
        requiredLogin: false      // do not need to be authenticated                
      }
    }).when('/contacts', {
      templateUrl: 'partials/contacts.html',
      controller: 'ContactsCtrl',
      access: {
        requiredLogin: false
      }
    }).when('/useraccount', {
      templateUrl: 'partials/useraccount.html',
      controller: 'UserAccountCtrl',
      access: {
        requiredLogin: true
      }
    }).when('/', {
      templateUrl: 'partials/home.html',
      controller: 'HomeCtrl',
      access: {
        requiredLogin: false
      }
    }).when('/page1', {
      templateUrl: 'partials/page1.html',
      controller: 'Page1Ctrl',
      access: {
        requiredLogin: true
      }
    }).when('/page2', {
      templateUrl: 'partials/page2.html',
      controller: 'Page2Ctrl',
      access: {
        requiredLogin: true
      }
    }).when('/page3', {
      templateUrl: 'partials/page3.html',
      controller: 'Page3Ctrl',
      access: {
        requiredLogin: true
      }
    }).when('/users', {
      templateUrl: 'partials/users.html',
      controller: 'UsersCtrl',
      access: {
        requiredLogin: true
      }
    }).otherwise({
      redirectTo: '/login'
    });
}]);
 
 
	 
myApp.run([ 'Idle', '$rootScope', '$window', '$location', 'AuthenticationFactory', '$uibModal', 'UserAuthFactory',
    function(Idle, $rootScope, $window, $location, AuthenticationFactory, $modal, UserAuthFactory) {
 
			
			
			
  // when the page refreshes, check if the user is already logged in
	
	
//	Idle.watch(); //vs  Idle.unwatch();
	
  AuthenticationFactory.check();
 
  $rootScope.$on("$routeChangeStart", function(event, nextRoute, currentRoute) {
    if ((nextRoute.access && nextRoute.access.requiredLogin) && !AuthenticationFactory.isLogged) {
			$rootScope.settingsDescription = {"role": '', "user" : ''};
      $location.path("/login"); // force a login as the page route requires authentication
    } else {
      // check if user object exists else fetch it. This is incase of a page refresh
			
			// ! in the conditon, take session data from the browser to reconstruct the object
      if (!AuthenticationFactory.user) AuthenticationFactory.username = $window.sessionStorage.username;
      if (!AuthenticationFactory.userRole) AuthenticationFactory.userRole = $window.sessionStorage.userRole;
		  if (!AuthenticationFactory.userId) AuthenticationFactory.userId = $window.sessionStorage.userId;
	
			
			
		//	$rootScope.settingsDescription = {"role": AuthenticationFactory.userRole, "username" : AuthenticationFactory.username};
    }
  });
 
  $rootScope.$on('$routeChangeSuccess', function(event, nextRoute, currentRoute) {
    $rootScope.showMenu = AuthenticationFactory.isLogged;
    $rootScope.role = AuthenticationFactory.userRole;
		$rootScope.admin = AuthenticationFactory.userRole === "admin"; // hide certain menus if not admin
		
			
			$rootScope.settingsDescription = {"role": AuthenticationFactory.userRole, "username" : AuthenticationFactory.username};
	
		
    // if the user is already logged in, take him to the home page
    if (AuthenticationFactory.isLogged == true && $location.path() == '/login') {
      $location.path('/');
    }
  });
	
	   

      function closeModals() {
        if ($rootScope.warning) {
          $rootScope.warning.close();
          $rootScope.warning = null;
        }

        if ($rootScope.timedout) {
          $rootScope.timedout.close();
          $rootScope.timedout = null;
        }
      }

	
	
	 $rootScope.$on('IdleStart', function() {
        closeModals(); // https://github.com/HackedByChinese/ng-idle/wiki/Idle-and-Idleprovider

        $rootScope.warning = $modal.open({
          templateUrl: 'warning-dialog.html',
          windowClass: 'modal-danger'
        });
      });

      $rootScope.$on('IdleEnd', function() {
        closeModals();
      });

      $rootScope.$on('IdleTimeout', function() {
        closeModals();
				UserAuthFactory.logout();
				
        $rootScope.timedout = $modal.open({
          templateUrl: 'timedout-dialog.html',
          windowClass: 'modal-danger'
        });
      });
	
	
	/*
		$rootScope.initialIdle = function(idleSeconds)
		{

									
		}
	*/
	
	
	
	$rootScope.mySettings = function() 
	{
		alert("implement me");
	}
	
		$rootScope.implement = function() 
	{
		alert("implement me");
	}
	
}]);