import api from "./api";


// GET ALL
export const getEmployees = () => {
  return api.get("/employees");
};


// CREATE
export const createEmployee = (data) => {
  return api.post("/employees", data);
};


// UPDATE
export const updateEmployee = (id, data) => {
  return api.put(`/employees/${id}`, data);
};


// DELETE
export const deleteEmployee = (id) => {
  return api.delete(`/employees/${id}`);
};