class ApiResponse{
    constructor(statusCode , data,message="Succes"){
        this.statusCodes = statusCode
        this.message = message,
        this.data = data
        this.success = statusCode<400
    }
}