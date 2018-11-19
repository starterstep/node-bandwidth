var util = require("util");

var UnexpectedResponseError = function (message, statusCode, data) {
	Error.captureStackTrace(this, this.constructor);
	this.name = this.constructor.name;
	this.message = message;
	this.statusCode = statusCode;
	this.data = data;
};

util.inherits(UnexpectedResponseError, Error);

module.exports = UnexpectedResponseError;
