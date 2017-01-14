/**
 * Created by Dell on 1/14/2017.
 */


(function () {
    angular.module('shoppingApp').component('viewUserDetails', {
        templateUrl: 'src/app/templates/view.users.details.template.html',
        controller: 'ViewUserDetailsController',
        controllerAs: 'vm',

        restrict: 'EA'
    });


    angular.module('shoppingApp').controller('ViewUserDetailsController', ViewUserDetailsController);

    function ViewUserDetailsController() {
        var vm = this;
        vm.users;

        vm.message = 'Hi Its working';
        //vm.users = activate;
        var allUsers = [
            {
                'firstName': 'Vishnu',
                'lastName': 'Awasthi',
                'address': 'Hyderabad'
            },
            {
                'firstName': 'Vishnu',
                'lastName': 'Awasthi',
                'address': 'Hyderabad'
            },
            {
                'firstName': 'Vishnu',
                'lastName': 'Awasthi',
                'address': 'Hyderabad'
            }
        ];
        activate();
        //////////////////////
        function activate() {
            vm.users = allUsers;
        }


    }
}());