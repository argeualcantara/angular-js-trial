(function(){
	'use strict';
	angular.module('app.consumer').controller('ConsumerCtrl', Consumer);

	function Consumer(service) {
		var vm = this;
		
		 loadJsonData();
		
		
		function loadJsonData(){
			return service.getJsonData().then(function(response){
				vm.dados = response.data;
			});
		}
	}
	
	
})();
