import { useEffect, useState } from "react";

function Employee() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("employees")) || [];
    setEmployees(data);
  }, []);

  return (
    <div>
      <h2>Employee List</h2>

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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Employee;