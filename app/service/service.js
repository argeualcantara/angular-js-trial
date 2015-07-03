(function(){
	'use strict';
	angular.module('app.service').factory('service', service);

	function service($http) {
		var services = {
						getJsonData: getJsonData};
		
		return services;
		
		
		function getJsonData(){
			return $http.get('https://public.opencpu.org/ocpu/library/MASS/data/Boston/json').then(getJson);
		}
		
		function getJson(data) {
			return data;
		}
	}
	
	
})();