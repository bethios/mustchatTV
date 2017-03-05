(function() {
    function HomeCtrl(Room) {
        this.heroTitle = "Must Chat TV!";
        this.chatRooms = Room.all;
        console.log(Room)
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();

