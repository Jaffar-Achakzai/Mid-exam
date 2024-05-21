import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new  mongoose .Schema;
({
    firstName: {
        type: String,
        require: true,
        minLength: [3, "The first_name should be at least of three characters"],
        maxLength: [30, "The Last_name should be at least of thirty characters"]
    },

    lastName: {
        type: String,
        require: true,
        minLength: [3, "The first_name should be at least of three characters"],
        maxLength: [30, "The Last_name should be at least of thirty characters"]
    },

    email: {
        type: String,
        require: true,
        validate: [validator.isEmail, "provide a valid Email ID "]
    },

    phone: {
        type: String,
        require: true,
        minLenght: [11, "The minlength should be 11 digits "],
        maxLength: [11, "The maxLength should be 11 digits "]
    },

    time: {
        type: String,
        require: true,
    },

    date: {
        type: String,
        require: true,
    },
  });

  export const reservation = mongoose.model("reservation", reservationSchema);