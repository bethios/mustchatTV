(function() {
    function HomeCtrl(Room) {
        this.heroTitle = "Must Chat TV!";
        this.chatRooms = Room.all;
        this.create = function(newRoomName) {
            Room.create(newRoomName);
        }

    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();

