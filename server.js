import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import AdminRoutes from './routes/user.route.js'

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}))

//routes
app.use('/',AdminRoutes)

app.listen(8000, () => {
  console.log("running on http://localhost:8000/");
});

mongoose
  .connect(process.env.MONGOURI)
  .then(() => {
    console.log("DB Connected!");
  })
  .catch(() => {
    console.log("Connection Failed!");
  });
