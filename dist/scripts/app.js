(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });
        $stateProvider
            .state('home', {
                url: '/',
                controller: 'HomeCtrl as home',
                templateUrl: '/templates/home.html'
            });

    }



    function BlocChatCookies($cookies, $uibModal, $scope){
        var currentUser = $cookies.get('blocChatCurrentUser');
        if (!currentUser || currentUser === '') {
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/userModal.html',
                controller: function($scope, $uibModalInstance){
                    $scope.createUser = function(newUserName){
                        $uibModalInstance.close();
                        $cookies.put('blocChatCurrentUser', newUserName)
                    }
                },
                size: 'md'
            });
        }
    }



    angular
        .module('blocChat', ['ui.router', 'ui.bootstrap',  'firebase', 'ngCookies'])
        .config(config)
        .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
