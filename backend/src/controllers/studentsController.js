const studentsService = require('../services/studentsService');

const getAllStudents = async (req, res) => {
  try {
    const students = await studentsService.getAllStudents();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar estudantes' });
  }
};

const getStudentById = async (req, res) => {
  try {
    const student = await studentsService.getStudentById(req.params.id);
    if (!student) {
      return res.status(404).json({ error: 'Estudante não encontrado' });
    }
    res.json(student);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar estudante' });
  }
};

const createStudent = async (req, res) => {
  try {
    const { name, email, age } = req.body;
    const newStudent = await studentsService.createStudent(name, email, age);
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar estudante' });
  }
};

module.exports = {
  getAllStudents,
  getStudentById,
  createStudent,
};
