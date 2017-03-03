(function() {
    function Room($rootScope, $firebaseArray) {
        var Room = {};

        return Room;
    }

    angular
        .module('blocChat')
        .factory('Room', ['$rootScope', 'Fixtures', Room]);
})();
