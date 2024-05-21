class ErrorHandler extends Error 
{
    constructor(err, statusCode)
    {
        super(message)
        this.statusCode=statusCode;
    }
}


export const errorMiddleware = (err,req,res,next) =>
{
    err.message=err.message || "Internal server error";
    err.statusCode=err.statusCode || 500;

    return res.message(err.statusCode).json(
        {
            success: false,
            messsage: err.message,
        });
};

export default ErrorHandler;