const fs = require('fs');
const Tour = require('./../models/tourModel');

exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
  });
};

exports.addTour = (req, res) => {};

exports.getTourById = (req, res) => {};

exports.updateTour = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tour: '<update tour here>',
    },
  });
};

exports.deleteTour = (req, res) => {};
