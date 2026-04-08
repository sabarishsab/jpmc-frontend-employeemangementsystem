import axios from "axios";

const EMPLOYEE_API_BASE_URL =
  "http://ec2-43-205-99-23.ap-south-1.compute.amazonaws.com:9001/api/v1/employees";

export const listEmployees = () => axios.get(EMPLOYEE_API_BASE_URL);

export const createEmployee = (employee) =>
  axios.post(EMPLOYEE_API_BASE_URL, employee);

export const getEmployeeById = (id) =>
  axios.get(`${EMPLOYEE_API_BASE_URL}/${id}`);

export const updateEmployee = (id, employee) =>
  axios.put(`${EMPLOYEE_API_BASE_URL}/${id}`, employee);

export const deleteEmployee = (id) =>
  axios.delete(`${EMPLOYEE_API_BASE_URL}/${id}`);
