'use strict';
const { cppdb } = require('../util');

module.exports = function deserialize(buffer) {
	

	return this[cppdb].deserialize(buffer);
};
