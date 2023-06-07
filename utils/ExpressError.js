class ExpressError extends Error {
    xonstructor(meesage, statusCode){
        this.message = messsage;
        this.statusCode = statusCode
    }
}
module.exports - ExpressError;