(function(exports){


[ 'information',
  'law',
  'support',
  'health',
  'work',
  'education',
  'leisure',
  'social',
  'culture',
  'living',
  'city' ]


	exports.categories = [
		{
			name:		'information',
			tags:		[],
			colors:		[]
		},



		{
			name:		'law',
			tags:		[],
			colors:		[]

		},

		{
			name:		'support',
			tags:		[],
			colors:		[]
		},

		{
			name:		'health',
			tags:		[],
			colors:		[]
		},

		{
			name:		'work',
			tags:		[],
			colors:		[]
		},

		{
			name:		'education',
			tags:		[],
			colors:		[]
		},

		{
			name:		'leisure',
			tags:		[],
			colors:		[]
		},

		{
			name:		'social',
			tags:		[],
			colors:		[]
		},

		{
			name:		'culture',
			tags:		[],
			colors:		[]
		},

		{
			name:		'living',
			tags:		[],
			colors:		[]
		},

		{
			name:		'city',
			tags:		[],
			colors:		[]
		}
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

	exports.unsortedTags = [
		'accessible',
		'free',
		'multi_language',
		'public_toilet'
	]





}(
	('undefined' !== typeof exports) 
	? exports
	: (this['ic'] = this['ic'] || {})['taxonomy'] = (this['ic']['taxonomy'] || {})
))
