(function(exports){

	exports.categories = [
		{
			name:		'information_counseling',
			tags:		[],
			colors:		['#f27020']
		},

		{
			name:		'law',
			tags:		[],
			colors:		['#f27020']

		},

		{
			name:		'support',
			tags:		[],
			colors:		['#f27020']
		},

		{
			name:		'health',
			tags:		[],
			colors:		['#f27020']
		},

		{
			name:		'work',
			tags:		[],
			colors:		['#f27020']
		},

		{
			name:		'education',
			tags:		[],
			colors:		['#f27020']
		},

		{
			name:		'leisure',
			tags:		[],
			colors:		['#f27020']
		},

		{
			name:		'social',
			tags:		[],
			colors:		['#f27020']
		},

		{
			name:		'culture',
			tags:		[],
			colors:		['#f27020']
		},

		{
			name:		'living',
			tags:		[],
			colors:		['#f27020']
		},

		// {
		// 	name:		'city',
		// 	tags:		[],
		// 	colors:		['#f27020']
		// }
	]

	exports.types = [
		{
			name:		'location',
			colors:		['#f27020', '#f27020'],
		},
		{
			name:		'event',
			colors:		['#7c51a2', '#7c51a2'],
		},
		{
			name:		'service',
			colors:		['#fec300', '#fec300'],
		},
		{
			name:		'information',
			colors:		['#62a7d5', '#62a7d5'],
		}
	]

	exports.tags = {
		targetGroups:[
			'children',
			'boys',
			'girls',
			'teenager',
			'seniors',
			'families',
			'men',
			'women',
			'adults',
			'lgbtiq',
			'volunteers',
		],
		misc: [
			'accessible',
			'free',
			'multi_language',
			'public_toilet'
		]
	}





}(
	('undefined' !== typeof exports) 
	? exports
	: (this['ic'] = this['ic'] || {})['taxonomy'] = (this['ic']['taxonomy'] || {})
))
