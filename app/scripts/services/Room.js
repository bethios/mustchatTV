(function() {
    function Room($firebaseArray, $cookies) {
        var roomRef = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(roomRef);

        var messageRef = firebase.database().ref().child("messages");
        var messages = $firebaseArray(messageRef);

        var currentDayTime = new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString();

        return {
            all: rooms,
            create: function(roomName){
                rooms.$add({ name: roomName });
            },
            getMessagesById: function(activeRoomId){
                return $firebaseArray(messageRef.orderByChild("roomId").equalTo(activeRoomId));
            },
            send: function(messageContent, activeRoomId){
                messages.$add({
                    content: messageContent,
                    roomId: activeRoomId,
                    sentAt: currentDayTime ,
                    username: $cookies.get('blocChatCurrentUser')
                });
            }
        };
}

    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray','$cookies' , Room])
})();
