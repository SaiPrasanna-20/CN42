const express = require("express");
const router = express.Router();
const Faculty = require("../models/Faculty");

//CREATE
router.post("/faculties", async (req,res) =>{
    const faculty = new Faculty(req.body);
    await faculty.save();
    res.send(faculty);
});

//READ
router.get("/faculties", async (req, res)=> {
    const faculty = await Faculty.find();
    res.send(faculty);
});
module.exports = router;