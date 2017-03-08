(function($scope) {
    function HomeCtrl(Room, $uibModal) {
        this.chatRooms = Room.all;
        this.create = function(newRoomName) {
            Room.create(newRoomName);
        };
        this.activeRoom= null;
        this.activeRoomMessages = null;

        this.selectedRoom = function(room){
            this.activeRoom = room;
            this.activeRoomMessages = Room.getMessagesById(this.activeRoom.$id);
        };

        this.sendMessage = function(messageContent){
            Room.send(messageContent, this.activeRoom.$id);
            $scope.textarea.$setPristine();
        }

    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal' ,'$cookies', HomeCtrl]);
})();

