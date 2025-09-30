const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

// ------------------------------
// Route: /profile → return user.json
// ------------------------------
router.get('/profile', (req, res, next) => {
  fs.readFile(path.join(__dirname, '..', 'user.json'), 'utf-8', (err, data) => {
    if (err) return next(err);
    res.json(JSON.parse(data));
  });
});

// ------------------------------
// Route: /login → user authentication
// ------------------------------
router.post('/login', (req, res, next) => {
  const { username, password } = req.body;

  fs.readFile(path.join(__dirname, '..', 'user.json'), 'utf-8', (err, data) => {
    if (err) return next(err);

    const user = JSON.parse(data);

    if (username !== user.username) {
      return res.json({
        status: false,
        message: 'User Name is invalid'
      });
    }

    if (password !== user.password) {
      return res.json({
        status: false,
        message: 'Password is invalid'
      });
    }

    return res.json({
      status: true,
      message: 'User Is valid'
    });
  });
});

// ------------------------------
// Route: /logout/:username → logout message
// ------------------------------
router.get('/logout/:username', (req, res) => {
  const username = req.params.username;
  res.send(`<b>${username} successfully logged out.</b>`);
});

module.exports = router;
