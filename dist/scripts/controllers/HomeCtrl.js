(function() {
    function HomeCtrl(Room) {
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

    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();

