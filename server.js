const express = require('express');
const cors = require('cors');
const studentsService = require('./backend/src/services/studentsService');
const coursesService = require('./backend/src/services/courseService');
const enrollmentsService = require('./backend/src/services/enrollmentService');
const instructorsService = require('./backend/src/services/instructorsService');

const app = express();
app.use(express.json());
app.use(cors());

// Rotas para Estudantes
app.get('/students', async (req, res) => {
  try {
    const students = await studentsService.getAllStudents();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar estudantes' });
  }
});

app.get('/students/:id', async (req, res) => {
  try {
    const student = await studentsService.getStudentById(req.params.id);
    if (!student) {
      return res.status(404).json({ error: 'Estudante não encontrado' });
    }
    res.json(student);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar estudante' });
  }
});

app.post('/students', async (req, res) => {
  try {
    const { name, email, age } = req.body;
    const newStudent = await studentsService.createStudent(name, email, age);
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar estudante' });
  }
});

// Rotas para Cursos
app.get('/courses', async (req, res) => {
  try {
    const courses = await coursesService.getAllCourses();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar cursos' });
  }
});

app.get('/courses/:id', async (req, res) => {
  try {
    const course = await coursesService.getCourseById(req.params.id);
    if (!course) {
      return res.status(404).json({ error: 'Curso não encontrado' });
    }
    res.json(course);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar curso' });
  }
});

app.post('/courses', async (req, res) => {
  try {
    const { name, description, workload } = req.body;
    const newCourse = await coursesService.createCourse(name, description, workload);
    res.status(201).json(newCourse);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar curso' });
  }
});

// Rotas para Matrículas
app.get('/enrollments', async (req, res) => {
  try {
    const enrollments = await enrollmentsService.getAllEnrollments();
    res.json(enrollments);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar matrículas' });
  }
});

app.get('/enrollments/:id', async (req, res) => {
  try {
    const enrollment = await enrollmentsService.getEnrollmentById(req.params.id);
    if (!enrollment) {
      return res.status(404).json({ error: 'Matrícula não encontrada' });
    }
    res.json(enrollment);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar matrícula' });
  }
});

app.post('/enrollments', async (req, res) => {
  try {
    const { studentId, courseId, enrollmentDate } = req.body;
    const newEnrollment = await enrollmentsService.createEnrollment(studentId, courseId, enrollmentDate);
    res.status(201).json(newEnrollment);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar matrícula' });
  }
});

// Rotas para Instrutores
app.get('/instructors', async (req, res) => {
  try {
    const instructors = await instructorsService.getAllInstructors();
    res.json(instructors);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar instrutores' });
  }
});

app.get('/instructors/:id', async (req, res) => {
  try {
    const instructor = await instructorsService.getInstructorById(req.params.id);
    if (!instructor) {
      return res.status(404).json({ error: 'Instrutor não encontrado' });
    }
    res.json(instructor);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar instrutor' });
  }
});

app.post('/instructors', async (req, res) => {
  try {
    const { name, email, subject } = req.body;
    const newInstructor = await instructorsService.createInstructor(name, email, subject);
    res.status(201).json(newInstructor);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar instrutor' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
