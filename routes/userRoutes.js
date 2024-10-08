const express = require('express');
const userController = require('../controllers/userController');

router = express.Router();

router.route('/').get(userController.getAllUsers).post(userController.addUser);
router
  .route('/:id')
  .get(userController.getUserById)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);


module.exports = router;
