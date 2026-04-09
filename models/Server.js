const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const User = require("./Model");

const app = express();
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/apidb")
  .then(() => console.log("DB Connected"))
  .catch(err => console.log(err));

/* ===========================
   1. ADD SINGLE DATA
=========================== */
app.post("/add", async (req, res) => {
  const data = new User(req.body);
  const result = await data.save();
  res.send(result);
});

/* ===========================
   2. ADD MULTIPLE DATA
=========================== */
app.post("/addMany", async (req, res) => {
  const result = await User.insertMany(req.body);
  res.send(result);
});

/* ===========================
   3. FIND DATA
=========================== */
app.get("/find", async (req, res) => {
  const result = await User.find();
  res.send(result);
});

/* ===========================
   4. OR OPERATOR
=========================== */
app.get("/or", async (req, res) => {
  const result = await User.find({
    $or: [
      { city: "Hyderabad" },
      { age: 20 }
    ]
  });
  res.send(result);
});

/* ===========================
   5. UPDATE ONE
=========================== */
app.put("/update", async (req, res) => {
  const result = await User.updateOne(
    { name: req.body.name },
    { $set: { age: req.body.age } }
  );
  res.send(result);
});

/* ===========================
   6. DELETE ONE
=========================== */
app.delete("/delete", async (req, res) => {
  const result = await User.deleteOne({ name: req.body.name });
  res.send(result);
});

/* ===========================
   7. SORT
=========================== */
app.get("/sort", async (req, res) => {
  const result = await User.find().sort({ age: 1 }); // 1 = ascending
  res.send(result);
});

/* ===========================
   8. LIMIT
=========================== */
app.get("/limit", async (req, res) => {
  const result = await User.find().limit(2);
  res.send(result);
});

// Server Start
app.listen(3000, () => {
  console.log("Server running on port 3000");
});