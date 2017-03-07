(function() {
    function BlocChatCookies($cookies) {
        var currentUser = $cookies.get('blocChatCurrentUser') || null;
        if (!currentUser || currentUser === '') {
            console.log("ask for user name");
            return $("#newRoomModal").modal();
        }
    }

    angular
        .module('blocChat')
        .run(['$cookies', BlocChatCookies]);
})();