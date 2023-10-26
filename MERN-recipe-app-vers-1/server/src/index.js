import express from "express";
// express is a framework to create API
import cors from "cors";
// CORS is a tool that will aloow me to set up communication between the front and back end
import mongoose from "mongoose";
// the database management system
const app = express();
// the above will generate a verion of our api
app.use(express.json());
// the above will allow for when data is sent from the front end to be converted into JSON with EVERY request - makes getting data from front end simple
app.use(cors());
// allows for simple api requests from front end

mongoose.connect(
  "mongodb+srv://jamesalderman1980:5c4FVdgWRnR6t11O@recipes.5enczl9.mongodb.net/recipes?retryWrites=true&w=majority"
);
// connects mongoose to our server

app.listen(3001, () => console.log("SERVER STARTED"));
// instructs api to start - the port number is where the api will run - (3000 will be where our front end will run)
