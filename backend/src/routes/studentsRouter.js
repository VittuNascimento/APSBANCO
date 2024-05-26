const express = require('express');
const studentsController = require('../controllers/studentsController');

const router = express.Router();

router.get('/', studentsController.getAllStudents);
router.get('/:id', studentsController.getStudentById);
router.post('/', studentsController.createStudent);

module.exports = router;
