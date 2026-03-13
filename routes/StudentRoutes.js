const express = require("express");
const router = express.Router();
const Student = require("../models/Student");

//CREATE
router.post("/students",async (req, res)=>{
    const student = new Student(req.body);
    await student.save();
    res.send(student);
});

//READ
router.get("/students",async(require,res)=>{
    const students=await Student.find();
    res.send(students);
});
module.exports=router;