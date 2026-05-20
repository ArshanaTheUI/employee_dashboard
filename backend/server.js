require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const employeeRoutes = require("./routes/employeeRoutes");

const app = express();


// Middleware
app.use(cors());

app.use(express.json());


// Routes
app.use("/api/auth", authRoutes);

app.use("/api/employees", employeeRoutes);



// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log("MongoDB Error:", err.message);
  });



// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


app.get("/", (req, res) => {
  res.send("Backend Running");
});












// require("dotenv").config();

// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");

// const app = express();

// const authRoutes = require("./routes/authRoutes");

// app.use("/api/auth", authRoutes);
// // Middleware
// app.use(cors());
// app.use(express.json());


// // MongoDB Connection
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => {
//     console.log("MongoDB Connected");
//   })
//   .catch((err) => {
//     console.log("MongoDB Error:", err.message);
//   });


// // Schema
// const EmployeeSchema = new mongoose.Schema(
//   {
//     empname: {
//       type: String,
//       required: true,
//     },

//     empaddress: {
//       type: String,
//       required: true,
//     },

//     empemail: {
//       type: String,
//       required: true,
//       unique: true,
//     },

//     empphone: {
//       type: String,
//       required: true,
//     },

//     empdesignation: {
//       type: String,
//       required: true,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// const Employee = mongoose.model("Employee", EmployeeSchema);



// // ================= CRUD APIs =================


// // CREATE Employee
// app.post("/employees", async (req, res) => {
//   try {
//     const employee = new Employee(req.body);

//     await employee.save();

//     res.status(201).json({
//       message: "Employee Created",
//       employee,
//     });

//   } catch (error) {
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// });



// // READ All Employees
// app.get("/employees", async (req, res) => {
//   try {
//     const employees = await Employee.find();

//     res.status(200).json(employees);

//   } catch (error) {
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// });



// // READ Single Employee
// app.get("/employees/:id", async (req, res) => {
//   try {
//     const employee = await Employee.findById(req.params.id);

//     if (!employee) {
//       return res.status(404).json({
//         message: "Employee not found",
//       });
//     }

//     res.status(200).json(employee);

//   } catch (error) {
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// });



// // UPDATE Employee
// app.put("/employees/:id", async (req, res) => {
//   try {
//     const updatedEmployee = await Employee.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       {
//         new: true,
//         runValidators: true,
//       }
//     );

//     if (!updatedEmployee) {
//       return res.status(404).json({
//         message: "Employee not found",
//       });
//     }

//     res.status(200).json({
//       message: "Employee Updated",
//       updatedEmployee,
//     });

//   } catch (error) {
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// });



// // DELETE Employee
// app.delete("/employees/:id", async (req, res) => {
//   try {
//     const deletedEmployee = await Employee.findByIdAndDelete(
//       req.params.id
//     );

//     if (!deletedEmployee) {
//       return res.status(404).json({
//         message: "Employee not found",
//       });
//     }

//     res.status(200).json({
//       message: "Employee Deleted",
//     });

//   } catch (error) {
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// });



// // Server
// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

