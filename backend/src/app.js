const express = require('express');
const cors = require('cors');
const studentsRoutes = require('./routes/studentsRoutes');
const coursesRoutes = require('./routes/coursesRoutes');
const enrollmentsRoutes = require('./routes/enrollmentsRoutes');
const instructorsRoutes = require('./routes/instructorsRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/students', studentsRoutes);
app.use('/api/courses', coursesRoutes);
app.use('/api/enrollments', enrollmentsRoutes);
app.use('/api/instructors', instructorsRoutes);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
