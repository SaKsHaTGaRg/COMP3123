const express = require("express");
const router = express.Router();
const {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee
} = require("../controllers/employeeController");
const auth = require("../middleware/auth");

router.post("/", auth, createEmployee); 
router.get("/",auth, getAllEmployees);
router.get("/:eid", auth, getEmployeeById);
router.put("/:eid", auth, updateEmployee);
router.delete("/:eid", auth, deleteEmployee);

module.exports = router;