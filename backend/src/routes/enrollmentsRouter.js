const express = require('express');
const enrollmentsController = require('../controllers/enrollmentsController');

const router = express.Router();

router.get('/', enrollmentsController.getAllEnrollments);
router.get('/:id', enrollmentsController.getEnrollmentById);
router.post('/', enrollmentsController.createEnrollment);

module.exports = router;
