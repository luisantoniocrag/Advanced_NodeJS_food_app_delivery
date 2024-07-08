import express from 'express';
import { AdminRoute, VendorRoute } from './routes';
import mongoose from 'mongoose';
import { MONGO_URI } from './config';

const PORT = 8000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/admin", AdminRoute);
app.use("/vandor", VendorRoute);

mongoose.connect(MONGO_URI).then(result => {
    //console.log(result);
    console.log("DB connected!")
}).catch(err => console.log('error:'+err));

app.listen(PORT, () => {
    console.log(`App is listening to the port: ${PORT}`);
});

