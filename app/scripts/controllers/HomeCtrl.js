(function($scope) {
    function HomeCtrl(Room, $uibModal, $cookies) {
        this.chatRooms = Room.all;
        this.create = function(newRoomName, usersAllowed) {
            Room.create(newRoomName, usersAllowed);
            console.log(usersAllowed);
        };
        this.activeRoom= null;
        this.activeRoomMessages = null;

        this.activeUser = $cookies.get('blocChatCurrentUser');
        var adminUsers = ['bethios'];

        this.isAdminUser = function(activeUser){
          return adminUsers.indexOf(this.activeUser) !== -1;
        };


        this.selectedRoom = function(room){
            this.activeRoom = room;
            this.activeRoomMessages = Room.getMessagesById(this.activeRoom.$id);
        };

        this.sendMessage = function(messageContent){
            Room.send(messageContent, this.activeRoom.$id);
        }

    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal' ,'$cookies', HomeCtrl]);
})();

