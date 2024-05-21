import mongoose from "mongoose";

export const dbconnection = () => {
    mongoose.connect(process.env.MONGO_URI,
        {
            dbName : "Restaurant"
        })
        .then(() => {
            console.log("connected dbase successfully");
        })
        .catch((err) =>{
            console.log('some error occured while connecting dbase ${err}');
        });
}