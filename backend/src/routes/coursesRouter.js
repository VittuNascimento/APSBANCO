const express = require('express');
const coursesController = require('../controllers/coursesController');

const router = express.Router();

router.get('/', coursesController.getAllCourses);
router.get('/:id', coursesController.getCourseById);
router.post('/', coursesController.createCourse);

module.exports = router;
