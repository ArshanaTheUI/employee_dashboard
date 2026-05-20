const Employee = require("../models/Employee");


// CREATE
exports.createEmployee = async (req, res) => {
  try {

    const employee = new Employee(req.body);

    await employee.save();

    res.status(201).json({
      message: "Employee Created",
      employee,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// READ ALL
exports.getEmployees = async (req, res) => {
  try {

    const employees = await Employee.find();

    res.status(200).json(employees);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// READ SINGLE
exports.getEmployee = async (req, res) => {
  try {

    const employee = await Employee.findById(req.params.id);

    if (!employee) {
      return res.status(404).json({
        message: "Employee not found",
      });
    }

    res.status(200).json(employee);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// UPDATE
exports.updateEmployee = async (req, res) => {
  try {

    const updatedEmployee =
      await Employee.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );

    res.status(200).json(updatedEmployee);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// DELETE
exports.deleteEmployee = async (req, res) => {
  try {

    await Employee.findByIdAndDelete(
      req.params.id
    );

    res.status(200).json({
      message: "Employee Deleted",
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};