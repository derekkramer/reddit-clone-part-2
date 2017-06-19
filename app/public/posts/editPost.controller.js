(function(){
	angular.module('reddit')
		.controller('EditPostController', EditPostController);

	function EditPostController($http, $stateParams, $state){
		const vm = this;

		vm.$onInit = function(){
			let getUrl = `/api/posts/${$stateParams.id}`;

			$http.get(getUrl, $stateParams)
			.then(res => {
				vm.edittedPost = res.data;
			});
		}

		vm.editPost = function(id){
			$http.patch(`/api/posts/${id}`, vm.edittedPost)
			.then(res => {
				$state.go('list');
			});
		}
	}
})();
