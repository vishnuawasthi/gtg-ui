/**
 * Created by Dell on 1/14/2017.
 */

(function () {
    'use strict';
    angular.module('shoppingApp').factory('loginService', loginService);

    loginService.$inject = ['$q', '$log', '$http', 'API_URLS'];

    function loginService($q, $log, $http, API_URLS) {
        var users = [
            {'username': 'admin', 'password': 'root', 'firstName': 'Vishnu', 'lastName': 'Awasthi'},
            {'username': 'test1', 'password': 'root', 'firstName': 'Test1', 'lastName': 'Awasthi'},
            {'username': 'test2', 'password': 'root', 'firstName': 'Test2', 'lastName': 'Awasthi'}
        ];

        var loginService = {
            login: login,
            getAllUsers: getAllUsers
        };

        return loginService;

        //////////////////////////////

        function login(username, password) {
            alert('In service');

            var deffered = $q.defer();
            var user = {
                'username': username,
                'password': password
            }
            $http.post('http://localhost:8090/login', user).then(successCallBack, failureCallBack);
            function successCallBack(response) {
                //$log.log('Response ' + response.data);

                deffered.resolve({
                    'data':response.data,
                    'status':response.status
                });
                console.log('Response : '+response.data);
            }

            function failureCallBack(error) {
               // $log.log('Error ' + error.data);
                console.log('Error : '+error.data);
                deffered.reject({
                    'data':error.data,
                    'status':error.status
                });
            }
        };

        function getAllUsers() {

        }


    }


}());
