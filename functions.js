/**
 * Checks if 'needle' is found in 'haystack', automatically handles
 * different data types. Parameter 'keys' tells the function to
 * search among the keys instead of values in haystack (default)
 *
 * @this {Object}
 * @param {string} needle The search character, string or number.
 * @param {boolean} [keys] Optional parameter to search for key instead of value, default false.
 * @return {boolean} Success or failure of the search operation or null if an error occurs.
 */
Object.prototype.contains = function(needle, keys) {
	//console.log('typeof this object: ', Object.prototype.toString.call(this));

	/** @private */ var haystack	= this
	/** @private */ , type			= Object.prototype.toString.call(haystack);

	if (keys === undefined) keys = false;

	if (haystack.length === 0) {
		console.log('Object contains no data');
		return null;
	}

	switch (type) {
		case '[object Object]':
			if (keys) {
				var objKeys = Object.keys(haystack);
				//console.log(objKeys);
				return (objKeys.indexOf(needle) !== -1);
			} else {
				for (var i = 0; i < haystack.length; i++) {
					if (haystack[i] === needle) {
						return true;
					}
				}
			}
			return false;
			break;
		case '[object Array]':
			if (keys) {
				var arrKeys = Object.keys(haystack);
				//console.log(arrKeys);
				return (arrKeys.indexOf(needle.toString()) !== -1);
			} else {
				return (haystack.indexOf(needle) !== -1);
			}
			break;
		case '[object String]':
			if (keys) {
				console.log("Type '" + type + "' does not have keys");
				return null;
			} else {
				return (haystack.indexOf(needle) !== -1);
			}
			break;
		case '[object Number]':
			if (keys) {
				console.log("Type '" + type + "' does not have keys");
				return null;
			} else {
				return (haystack.toString().indexOf(needle) !== -1);
			}
			break;
		default:
			console.log("Type '" + type + "' not supported");
			return null;
	}
}
