const express = require('express');
const instructorsController = require('../controllers/instructorsController');

const router = express.Router();

router.get('/', instructorsController.getAllInstructors);
router.get('/:id', instructorsController.getInstructorById);
router.post('/', instructorsController.createInstructor);

module.exports = router;
