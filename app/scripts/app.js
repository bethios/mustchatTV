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

    function BlocChatCookies($cookies){
        var currentUser = $cookies.get('blocChatCurrentUser');
        if (!currentUser || currentUser === '') {
            console.log("ask for user name");
            console.log($('#newRoomModal'));
            return $("#newRoomModal").modal("show");
        }
    }

    angular
        .module('blocChat', ['ui.router', 'firebase', 'ngCookies'])
        .config(config)
        .run(['$cookies', BlocChatCookies]);
})();
