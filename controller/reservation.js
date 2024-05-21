import validator from "validator";
import ErrorHandler from "../error/error.js";
import {reservation} from "../models/reservationSchema.js";

export const sendReservation = async(req,res,next) => {
const {firstName, lastName, email, phone, date, time} = req.body;
if(!firstName || lastName || email || phone || date || time )
{
    return next(new ErrorHandler("Please fil the full reservation form ", 400));
}

try
{
await Reservation.create(firstName, lastName, email, phone, date, time );
res.status(200).json({
success: true,
message: "reservation sent suucessfully",
});
}
catch(error)
{
if(error.name === "validationerror")
{
    const validationerror = object.values(error.error).map((err) => err.message);

    return nexr(new ErrorHandler(validatorErrors.jion(","),400));
}
return next(error);

}
};