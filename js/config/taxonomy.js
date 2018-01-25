(function(exports){

	exports.categories = [
		{
			name:		'information_counseling',
			tags:		[],
			colors:		['#c25a1a']
		},

		{
			name:		'law',
			tags:		[],
			colors:		['#c25a1a']

		},

		{
			name:		'support',
			tags:		[],
			colors:		['#c25a1a']
		},

		{
			name:		'health',
			tags:		[],
			colors:		['#c25a1a']
		},

		{
			name:		'work',
			tags:		[],
			colors:		['#c25a1a']
		},

		{
			name:		'education',
			tags:		[],
			colors:		['#c25a1a']
		},

		{
			name:		'leisure',
			tags:		[],
			colors:		['#c25a1a']
		},

		{
			name:		'social',
			tags:		[],
			colors:		['#c25a1a']
		},

		{
			name:		'culture',
			tags:		[],
			colors:		['#c25a1a']
		},

		{
			name:		'living',
			tags:		[],
			colors:		['#c25a1a']
		},

		// {
		// 	name:		'city',
		// 	tags:		[],
		// 	colors:		['#c25a1a']
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
