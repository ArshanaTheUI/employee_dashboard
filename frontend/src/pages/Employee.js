import { useEffect, useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import axios from "axios";
function Employee() {
  const [employees, setEmployees] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
   const [editId, setEditId] = useState(null);
const [editForm, setEditForm] = useState({
    empname: "",
    empaddress: "",
    empemail: "",
    empphone: "",
    empdesignation: ""
  });
  // useEffect(() => {
  //   const data = JSON.parse(localStorage.getItem("employees")) || [];
  //   setEmployees(data);
  // }, []);




    const fetchData = async () => {
    const res = await axios.get("http://localhost:5000/employees");
    setEmployees(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);


  // const handleDelete = (index) => {
  //   const updated = employees.filter((_, i) => i !== index);
  //   setEmployees(updated);
  //   localStorage.setItem("employees", JSON.stringify(updated));
  // };

  // ✏️ Start Edit
  // const handleEdit = (index) => {
  //   setEditIndex(index);
  //   setEditForm(employees[index]);
  // };


 const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/employees/${id}`);
    fetchData();
  };

  // edit
  const handleEdit = (emp) => {
    setEditForm(emp);
    setEditId(emp._id);
  };








  // handle edit input
  // const handleChange = (e) => {
  //   setEditForm({
  //     ...editForm,
  //     [e.target.name]: e.target.value
  //   });
  // };

  // 💾 Save Edit
  // const handleUpdate = (e) => {
  //   e.preventDefault();

  //   const updated = [...employees];
  //   updated[editIndex] = editForm;

  //   setEmployees(updated);
  //   localStorage.setItem("employees", JSON.stringify(updated));

  //   setEditIndex(null);
  // };

// update
  const handleUpdate = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/employees/${editId}`, editForm);
    setEditId(null);
    fetchData();
  };

const handleChange = (e) => {
  setEditForm({
    ...editForm,
    [e.target.name]: e.target.value
  });
};
  return (
    <div>
      <h2>Employee List</h2>


{/* 
{
  editIndex !== null && (
    <form onSubmit={handleUpdate}>
  <Input name="empname" label="Employee Name" value={editForm.empname} onChange={handleChange} />
        <Input name="empaddress" label="Employee Address" value={editForm.empaddress} onChange={handleChange} />
        <Input name="empemail" label="Employee Email" value={editForm.empemail} onChange={handleChange} />
        <Input name="empphone" label="Employee Phone" value={editForm.empphone} onChange={handleChange} />
        <Input name="empdesignation" label="Employee Designation" value={editForm.empdesignation} onChange={handleChange} />

        <Button text="Update Employee" type="submit" />
    </form>
  )
} */}

 {editId && (
        <form onSubmit={handleUpdate}>
          <input name="empname" value={editForm.empname} onChange={handleChange} />
              <Input name="empaddress" label="Employee Address" value={editForm.empaddress} onChange={handleChange} />
        <Input name="empemail" label="Employee Email" value={editForm.empemail} onChange={handleChange} />
        <Input name="empphone" label="Employee Phone" value={editForm.empphone} onChange={handleChange} />
        <Input name="empdesignation" label="Employee Designation" value={editForm.empdesignation} onChange={handleChange} />

          <button type="submit">Update</button>
        </form>
      )}
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Designation</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((emp, index) => (
            <tr key={index}>
              <td>{emp.empname}</td>
              <td>{emp.empaddress}</td>
              <td>{emp.empemail}</td>
              <td>{emp.empphone}</td>
              <td>{emp.empdesignation}</td>


               {/* <td>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td> */}
              <td>
  <button onClick={() => handleEdit(emp)}>Edit</button>
  <button onClick={() => handleDelete(emp._id)}>Delete</button>
</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Employee;