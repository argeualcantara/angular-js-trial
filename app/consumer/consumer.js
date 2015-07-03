(function(){
	'use strict';
	angular.module('app.consumer').controller('ConsumerCtrl', Consumer);

	function Consumer(service) {
		var vm = this;
		
		 loaadJsonData();
		
		
		function loaadJsonData(){
			return service.getJsonData().then(function(response){
				return vm.dados = response.data;
			});
		}
	}
	
	
})();
