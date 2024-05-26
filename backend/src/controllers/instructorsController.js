const instructorsService = require('../services/instructorsService');

const getAllInstructors = async (req, res) => {
  try {
    const instructors = await instructorsService.getAllInstructors();
    res.json(instructors);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar instrutores' });
  }
};

const getInstructorById = async (req, res) => {
  try {
    const instructor = await instructorsService.getInstructorById(req.params.id);
    if (!instructor) {
      return res.status(404).json({ error: 'Instrutor não encontrado' });
    }
    res.json(instructor);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar instrutor' });
  }
};

const createInstructor = async (req, res) => {
  try {
    const { name, email, subject } = req.body;
    const newInstructor = await instructorsService.createInstructor(name, email, subject);
    res.status(201).json(newInstructor);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar instrutor' });
  }
};

module.exports = {
  getAllInstructors,
  getInstructorById,
  createInstructor,
};
