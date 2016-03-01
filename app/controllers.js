angular.module('adtv')
    .controller('tv.users', ['$scope', function($scope) {
        $scope.users = [];
    }])
    .controller('tv.files', ['$scope', function($scope) {
        var vm = this;
        vm.files = [
            { title: "节目类型1", key: "1" }, {
                title: "节目类型2",
                key: "2",
                folder: true,
                children: [
                    { title: "节目类型2.1", key: "3" },
                    { title: "节目类型2.2", key: "4" }
                ]
            }
        ];
    }]);
