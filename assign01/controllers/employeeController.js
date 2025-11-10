

const Employee = require("../models/Employee");

const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(
      employees.map(emp => ({
        employee_id: emp._id,
        first_name: emp.first_name,
        last_name: emp.last_name,
        email: emp.email,
        position: emp.position,
        salary: emp.salary,
        dateOfJoining: emp.dateOfJoining,
        department: emp.department
      }))
    );
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: false, message: "Server error" });
  }
};


const getEmployeeById = async (req, res) => {
  try {
    const emp = await Employee.findById(req.params.eid);
    if (!emp) {
      return res.status(404).json({ status: false, message: "Employee not found" });
    }
    res.status(200).json(emp);
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: false, message: "Server error" });
  }
};


const createEmployee = async (req, res) => {
  try {
    const newEmp = new Employee(req.body);
    const savedEmp = await newEmp.save();
    res.status(201).json({
      message: "Employee created successfully",
      employee_id: savedEmp._id
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: false, message: "Server error" });
  }
};


const updateEmployee = async (req, res) => {
  try {
    const updatedEmp = await Employee.findByIdAndUpdate(
      req.params.eid,
      req.body,
      { new: true }
    );
    if (!updatedEmp) {
      return res.status(404).json({ status: false, message: "Employee not found" });
    }
    res.status(200).json({
      message: "Employee updated successfully"
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: false, message: "Server error" });
  }
};


const deleteEmployee = async (req, res) => {
  try {
    const deletedEmp = await Employee.findByIdAndDelete(req.params.eid);
    if (!deletedEmp) {
      return res.status(404).json({ status: false, message: "Employee not found" });
    }
    res.status(204).send();
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: false, message: "Server error" });
  }
};

module.exports = {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee
};