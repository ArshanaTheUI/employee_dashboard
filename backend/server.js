const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// connect MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/employees");

// schema
const EmployeeSchema = new mongoose.Schema({
  empname: String,
  empaddress: String,
  empemail: String,
  empphone: String,
  empdesignation: String
});

const Employee = mongoose.model("Employee", EmployeeSchema);


// 🔥 CRUD APIs

// CREATE
app.post("/employees", async (req, res) => {
  const emp = new Employee(req.body);
  await emp.save();
  res.send(emp);
});

// READ
app.get("/employees", async (req, res) => {
  const data = await Employee.find();
  res.send(data);
});

// UPDATE
app.put("/employees/:id", async (req, res) => {
  const updated = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(updated);
});

// DELETE
app.delete("/employees/:id", async (req, res) => {
  await Employee.findByIdAndDelete(req.params.id);
  res.send("Deleted");
});

app.listen(5000, () => console.log("Server running on port 5000"));