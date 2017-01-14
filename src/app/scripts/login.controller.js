/**
 * Created by Dell on 1/13/2017.
 */

(function () {
    'use strict';
    angular.module('shoppingApp').controller('LoginController', LoginController);

    LoginController.$inject = ['$rootScope', 'loginService'];

    function LoginController($rootScope, loginService) {
        var vm = this;
        vm.username;
        vm.password;

        vm.login = login;

        //////////////////////
        function login() {
            console.log('Login() - start');

            loginService.login(vm.username,vm.password).then(successCallBack, failureCallBack);


            function successCallBack(response) {
               vm.user = response;
                $rootScope.isLoggedIn = true;

            }

            function failureCallBack(error) {
                $rootScope.isLoggedIn = false;
                vm.errorMessage = error.userMessage;

            }

        }

    };

}());