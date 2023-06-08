class ExpressError extends Error {
    constructor(message, statusCode) {
        super();
        this.message = message;
        this.statusCode = statusCode;
    }
}

module.exports = ExpressError;
// The utils directory was created for a async wrapper function that will be used for status code
//  error handling and short of boilerplate 