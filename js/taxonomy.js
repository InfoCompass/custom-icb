(function(exports){

	exports.categories = [
		{
			name:		'information_counseling',
			tags:		[],
			colors:		['#f5548a']
		},

		{
			name:		'law',
			tags:		[],
			colors:		['#f27020']

		},

		{
			name:		'support',
			tags:		[],
			colors:		['#6b4fad']
		},

		{
			name:		'health',
			tags:		[],
			colors:		['#62aa54']
		},

		{
			name:		'work',
			tags:		[],
			colors:		['#008ddf']
		},

		{
			name:		'education',
			tags:		[],
			colors:		['#9d7be2']
		},

		{
			name:		'leisure',
			tags:		[],
			colors:		['#4fa8e0']
		},

		{
			name:		'social',
			tags:		[],
			colors:		['#f27020']
		},

		{
			name:		'culture',
			tags:		[],
			colors:		['#db3643']
		},

		{
			name:		'living',
			tags:		[],
			colors:		['#faa820']
		},

		{
			name:		'parents_children',
			tags:		[],
			colors:		['#fc8023']
		},

		{
			name:		'unknown',
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
		// {
		// 	name:		'event',
		// 	colors:		['#7c51a2', '#7c51a2'],
		// },
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
			'no_status',
			'volunteers_needed'
		]
	}





}(
	('undefined' !== typeof exports) 
	? exports
	: (this['ic'] = this['ic'] || {})['taxonomy'] = (this['ic']['taxonomy'] || {})
))
