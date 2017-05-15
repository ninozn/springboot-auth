'use strict';

angular.module('myApp.register', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/register', {
            templateUrl: 'register/register.html',
            controller: 'RegisterCtrl'
        });
    }])


    .controller('RegisterCtrl', ['$scope', '$rootScope', '$http', '$location', '$httpParamSerializerJQLike',
        function ($scope, $rootScope, $http, $location, $httpParamSerializerJQLike) {
            var self = this
            $rootScope.selectedTab = $location.path() || '/';

            $scope.registerDetails = {};
            $scope.register = function () {
                $http({
                    url: '/user/create',
                    method: 'POST',
                    data: $httpParamSerializerJQLike($scope.registerDetails),
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                })
                    .then(function (res) {
                        console.log("Log response: "+JSON.stringify(res.data, null, 2));
                        $rootScope.authenticated = true;
                        $location.path("/");
                        $rootScope.selectedTab = "/";
                        self.error = false;
                    })
                    .catch(function () {
                        $rootScope.authenticated = false;
                        $location.path("/register");
                        $rootScope.selectedTab = "/register";
                        self.error = true;
                    });
            };
        }]);
