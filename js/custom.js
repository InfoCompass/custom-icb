angular.module('icFilters')

.filter('icCategory', [

	'icTaxonomy',

	function(icTaxonomy){
		var dummy = {name: 'unknown'}
		
		return function(item){
			var tags = item && item.tags || item

			if(!Array.isArray(tags)) return dummy

			return icTaxonomy.getCategory(item && item.primaryTopic || tags) || dummy
		}
	}
])