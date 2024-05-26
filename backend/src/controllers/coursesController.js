const coursesService = require('../services/coursesService');

const getAllCourses = async (req, res) => {
  try {
    const courses = await coursesService.getAllCourses();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar cursos' });
  }
};

const getCourseById = async (req, res) => {
  try {
    const course = await coursesService.getCourseById(req.params.id);
    if (!course) {
      return res.status(404).json({ error: 'Curso não encontrado' });
    }
    res.json(course);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar curso' });
  }
};

const createCourse = async (req, res) => {
  try {
    const { name, description, workload } = req.body;
    const newCourse = await coursesService.createCourse(name, description, workload);
    res.status(201).json(newCourse);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar curso' });
  }
};

module.exports = {
  getAllCourses,
  getCourseById,
  createCourse,
};
