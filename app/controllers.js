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

        vm.verify = function(){
            swal('审核', '是否通过当前节目？', 'info');
            swal({
                title: "审核",
                text: "是否通过当前节目？",
                type: "info",
                showCancelButton: true,
                confirmButtonColor: "#FF7043",
                confirmButtonText: "通过",
                cancelButtonText: "不通过",
            });
        }
    }])
    .controller('tv.scenes', ['$scope', function($scope) {
    	var vm = this;
    	vm.scenes = [
    		{
    			title: '场景1',
    			created_at: '2016-02-10'
    		},
    		{
    			title: '场景2',
    			created_at: '2016-02-10'
    		},
    		{
    			title: '场景3',
    			created_at: '2016-02-10'
    		},
    		{
    			title: '场景4',
    			created_at: '2016-02-10'
    		},
    		{
    			title: '场景5',
    			created_at: '2016-02-10'
    		}
    	];
    }]);
