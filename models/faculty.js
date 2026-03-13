const mongoose = require("mongoose");
const FacultySchema = new mongoose.Schema({
    name: String,
    age: Number,
    course: String
});
module.exports = mongoose.model("Faculty",FacultySchema);