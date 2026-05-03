import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";

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

  const handleSubmit = (e) => {
    e.preventDefault();

    // get old data
    const existing = JSON.parse(localStorage.getItem("employees")) || [];

    // add new employee
    const updated = [...existing, form];

    // save back
    localStorage.setItem("employees", JSON.stringify(updated));

    // clear form
    setForm({
      empname: "",
      empaddress: "",
      empemail: "",
      empphone: "",
      empdesignation: ""
    });

    alert("Employee added!");
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