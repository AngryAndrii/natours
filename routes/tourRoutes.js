const express = require('express');
const tourController = require('../controllers/tourController');
const {
  checkId,
  checkBody,
  getAllTours,
  getTourById,
  addTour,
  updateTour,
  deleteTour,
} = tourController;

router = express.Router();

router.param('id', checkId);

router.route('/').get(getAllTours).post(checkBody, addTour);
router.route('/:id').get(getTourById).patch(updateTour).delete(deleteTour);

module.exports = router;
