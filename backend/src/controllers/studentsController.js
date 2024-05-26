const studentsService = require('../services/studentsService');

exports.getStudents = async (req, res) => {
  try {
    const students = await studentsService.getAllStudents();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar alunos' });
  }
};

exports.getStudentById = async (req, res) => {
  try {
    const student = await studentsService.getStudentById(req.params.id);
    if (!student) {
      return res.status(404).json({ error: 'Aluno não encontrado' });
    }
    res.json(student);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar aluno' });
  }
};

exports.createStudent = async (req, res) => {
  try {
    const { name, email, age } = req.body;
    const newStudent = await studentsService.createStudent(name, email, age);
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar aluno' });
  }
};

exports.updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, age } = req.body;
    const updatedStudent = await studentsService.updateStudent(id, name, email, age);
    if (!updatedStudent) {
      return res.status(404).json({ error: 'Aluno não encontrado' });
    }
    res.json(updatedStudent);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao atualizar aluno' });
  }
};

exports.deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedStudent = await studentsService.deleteStudent(id);
    if (!deletedStudent) {
      return res.status(404).json({ error: 'Aluno não encontrado' });
    }
    res.json(deletedStudent);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir aluno' });
  }
};
