(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });
        $stateProvider
            .state('home', {
                url: '/',
                controller: 'HomeCtrl as home',
                templateUrl: '/templates/home.html'
            });

    }


    function BlocChatCookies($cookies, $uibModal, $scope){
        var currentUser = $cookies.get('blocChatCurrentUser');
        if (!currentUser || currentUser === '') {
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/userModal.html',
                backdrop: 'static',
                keyboard: false,
                controller: function($scope, $uibModalInstance){
                    $scope.createUser = function(newUserName, newUserEmail, newUserPassword){
                        if(newUserName.length > 4){
                            $cookies.put('blocChatCurrentUser', newUserName);
                            firebase.auth().createUserWithEmailAndPassword(newUserEmail, newUserPassword).catch(function(error) {
                                // Handle Errors here.
                                var errorCode = error.code;
                                var errorMessage = error.message;
                                if(errorCode === 'auth/email-already-in-use'){
                                    alert('account with this email already exists, please log in')
                                }else if(errorCode === 'auth/invalid-email'){
                                    alert('invalid email address')
                                }else if(errorCode ==='auth/weak-password'){
                                    alert('weak password')
                                }

                            });
                            $uibModalInstance.close();

                        }else{
                            alert("Please choose a longer user name")
                        }

                    };
                    $scope.signInUser= function(signInUserName, signInUserEmail, signInUserPassword){
                        $cookies.put('blocChatCurrentUser', signInUserName);
                        firebase.auth().signInWithEmailAndPassword(signInUserEmail, signInUserPassword).catch(function(error) {
                            // Handle Errors here.
                            var errorCode = error.code;
                            var errorMessage = error.message;
                            if(errorCode === 'auth/invalid-email'){
                                alert("please retype email address")
                            }else if(errorCode === 'auth/user-not-found'){
                                alert("user not found, please sign up for an account")
                            }else if(errorCode === 'auth/wrong-password'){
                                alert('wrong password please try again');
                            }
                        });
                        $uibModalInstance.close();

                    }
                },
                size: 'md'
            });

        }

        

    }

    angular
        .module('blocChat', ['ui.router', 'ui.bootstrap',  'firebase', 'ngCookies'])
        .config(config)
        .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
