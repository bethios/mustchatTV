(function() {
    function HomeCtrl() {
        this.heroTitle = "Must Chat TV!";
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', HomeCtrl);
})();

