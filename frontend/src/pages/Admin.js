import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import axios from "axios";
import { createEmployee } from "../services/employeeService";
// import {
//   getEmployees,
// } from "../services/employeeService";

function Admin() {
  const [form, setForm] = useState({
    empname: "",
    empaddress: "",
    empemail: "",
    empphone: "",
    empdesignation: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };



    const handleSubmit = async (e) => {
    e.preventDefault();

    // await axios.post("http://localhost:5000/api/employees", form);
await createEmployee(form);
    alert("Employee added!");

    setForm({
      empname: "",
      empaddress: "",
      empemail: "",
      empphone: "",
      empdesignation: ""
    });
  };
  return (
    <div>
      <h2>Add Employee</h2>

      <form onSubmit={handleSubmit}>
        <Input name="empname" label="Employee Name" value={form.empname} onChange={handleChange} />
        <Input name="empaddress" label="Employee Address" value={form.empaddress} onChange={handleChange} />
        <Input name="empemail" label="Employee Email" value={form.empemail} onChange={handleChange} />
        <Input name="empphone" label="Employee Phone" value={form.empphone} onChange={handleChange} />
        <Input name="empdesignation" label="Employee Designation" value={form.empdesignation} onChange={handleChange} />

        <Button text="Add Employee" type="submit" />
      </form>
    </div>
  );
}

export default Admin;