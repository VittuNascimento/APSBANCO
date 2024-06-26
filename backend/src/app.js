const express = require('express');
const cors = require('cors');
const studentsRouter = require('./routes/studentsRouter');
const coursesRouter = require('./routes/coursesRouter');
const enrollmentsRouter = require('./routes/enrollmentsRouter');
const instructorsRouter = require('./routes/instructorsRouter');

const app = express();
app.use(express.json());
app.use(cors());

// Rota raiz
app.get('/', (req, res) => {
  res.send('Bem-vindo à API da University App!');
});

// Rotas
app.use('/api/students', studentsRouter);
app.use('/api/courses', coursesRouter);
app.use('/api/enrollments', enrollmentsRouter);
app.use('/api/instructors', instructorsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
