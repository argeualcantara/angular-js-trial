(function(){
	'use strict';
	angular.module('ConsumerApp').controller('ConsumerCtrl', Consumer);

	function Consumer($scope, $http) {
		$http.get('https://public.opencpu.org/ocpu/library/MASS/data/Boston/json').
			success(function(data) {
				$scope.dados = data;
			});
	}
	
})();
