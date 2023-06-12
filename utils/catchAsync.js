module.exports = func => {
    return (req, res, next) => {
        func(req, res, next).catch(next);
    }
}
// The utils directory was created for a async wrapper function that will be used for status code
//  error handling and short of boilerplate 