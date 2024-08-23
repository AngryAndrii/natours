const express = require('express');
const fs = require('fs');

const getAllUsers = (req, res) => {
  res.status(500).json({
    status: 'failed',
    message: 'this route is not yet defined',
  });
};
const addUser = (req, res) => {
  res.status(500).json({
    status: 'failed',
    message: 'this route is not yet defined',
  });
};
const getUserById = (req, res) => {
  res.status(500).json({
    status: 'failed',
    message: 'this route is not yet defined',
  });
};
const updateUser = (req, res) => {
  res.status(500).json({
    status: 'failed',
    message: 'this route is not yet defined',
  });
};
const deleteUser = (req, res) => {
  res.status(500).json({
    status: 'failed',
    message: 'this route is not yet defined',
  });
};

router = express.Router();

router.route('/').get(getAllUsers).post(addUser);
router.route('/:id').get(getUserById).patch(updateUser).delete(deleteUser);

module.exports = router;
