const enrollmentsService = require('../services/enrollmentsService');

const getAllEnrollments = async (req, res) => {
  try {
    const enrollments = await enrollmentsService.getAllEnrollments();
    res.json(enrollments);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar matrículas' });
  }
};

const getEnrollmentById = async (req, res) => {
  try {
    const enrollment = await enrollmentsService.getEnrollmentById(req.params.id);
    if (!enrollment) {
      return res.status(404).json({ error: 'Matrícula não encontrada' });
    }
    res.json(enrollment);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar matrícula' });
  }
};

const createEnrollment = async (req, res) => {
  try {
    const { studentId, courseId, enrollmentDate } = req.body;
    const newEnrollment = await enrollmentsService.createEnrollment(studentId, courseId, enrollmentDate);
    res.status(201).json(newEnrollment);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar matrícula' });
  }
};

module.exports = {
  getAllEnrollments,
  getEnrollmentById,
  createEnrollment,
};
