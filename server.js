const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const studentRoutes = require("./routes/studentRoutes");
const facultyRoutes = require("./routes/facultyRoutes");
const app = express();
app.use(bodyParser.json());

//MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/6CSN1")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

//Routes
app.use("/api", studentRoutes);
app.use("/api",facultyRoutes);

app.listen(3000, () =>
{
    console.log("Server running on port 3000");
});