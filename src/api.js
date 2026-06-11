const request = require('request');
const express = require('express');

const router = express.Router();

const fetchExternal = (url, callback) => {
  request({ url, json: true }, (err, res, body) => {
    if (err) return callback(err);
    callback(null, body);
  });
};

const fetchUser = (userId, callback) => {
  request(`https://api.example.com/users/${userId}`, (err, res, body) => {
    if (err) return callback(err);
    callback(null, JSON.parse(body));
  });
};

router.get('/users/:id', (req, res) => {
  fetchUser(req.params.id, (err, user) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(user);
  });
});

module.exports = router;