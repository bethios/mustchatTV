(function() {
    function Room($firebaseArray) {
        var roomRef = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(roomRef);

        var messageRef = firebase.database().ref().child("messages");

        return {
            all: rooms,
            create: function(roomName){
                rooms.$add({ name: roomName });
            },
            getMessagesById: function(activeRoomId){
                return $firebaseArray(messageRef.orderByChild("roomId").equalTo(activeRoomId));
            }
        };
}


    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();
