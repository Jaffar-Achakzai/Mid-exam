import app from "./app.js";

app.listen(process.env.port, ()=>{
    console.log('server running on this port ${process.env.port}');
});