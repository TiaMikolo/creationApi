import mongoose from "mongoose";
import express from "express";
import userRoute from "./routes/userRoute.js";
import 'dotenv/config'

const app = express();
const port = process.env.PORT

app.use(express.json());

mongoose.connect(process.env.URL_FOR_MONGODB)
    .then( () => console.log("Connected to MongoDB"))
    .catch( (err) => console.log(err))

//user route
app.use('/',userRoute)

//default route
app.get('/',(req,res)=> {
    res.send('Welcomme to my API')
})

//global error
app.use((err,req,res,next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})