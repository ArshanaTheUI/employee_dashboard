const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema(
  {
    empname: {
      type: String,
      required: true,
    },

    empaddress: {
      type: String,
      required: true,
    },

    empemail: {
      type: String,
      required: true,
      unique: true,
    },

    empphone: {
      type: String,
      required: true,
    },

    empdesignation: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Employee", EmployeeSchema);