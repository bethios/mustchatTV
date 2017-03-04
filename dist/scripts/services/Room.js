(function() {
    function Room($firebaseArray) {
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);
        var roomArray = rooms.slice();

        console.log(rooms);
        console.log(roomArray);
        console.log(rooms.length);
        return {
            all: rooms
        };
    }

    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();
