(function() {
    function Message($firebaseArray) {
        var ref = firebase.database().ref().child("messages");
        var allMessages = $firebaseArray(ref);

        return {
            getByRoomId: function(activeRoomId){
                return allMessages.orderByChild("roomId").equalTo(activeRoomId);
            }
        }
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', "Room", Message]);
})();