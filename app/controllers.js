angular.module('adtv')
    .controller('tv.users', ['$scope', function($scope) {
        $scope.users = [];
    }])
    .controller('tv.files', ['$scope', function($scope) {
        var vm = this;

        vm.node = null;
        vm.files = [
            { title: "图片", key: "1" }, 
            {
                title: "视频",
                key: "2",
                folder: true,
                children: [
                    { title: "Flash", key: "3" },
                    { title: "MP4", key: "4" }
                ]
            },
            {
            	title: '音乐', key: 5
            }
        ];
    }]);
