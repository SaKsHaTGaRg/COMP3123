const express = require('express');
const { registerUser} = require('../controllers/UserController');
const { loginUser } = require('../controllers/UserController');
const router = express.Router(); 


router.post('/signup', registerUser);

router.post('/login', loginUser);
module.exports = router; 