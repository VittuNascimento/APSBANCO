const pool = require('../config/database');
const Student = require('../models/Student');

exports.getAllStudents = async () => {
  const result = await pool.query('SELECT * FROM students');
  return result.rows.map(row => new Student(row.id, row.name, row.email, row.age));
};

exports.getStudentById = async (id) => {
  const result = await pool.query('SELECT * FROM students WHERE id = $1', [id]);
  if (result.rows.length === 0) {
    return null;
  }
  const { id: studentId, name, email, age } = result.rows[0];
  return new Student(studentId, name, email, age);
};

exports.createStudent = async (name, email, age) => {
  const result = await pool.query(
    'INSERT INTO students (name, email, age) VALUES ($1, $2, $3) RETURNING *',
    [name, email, age]
  );
  const { id, name: studentName, email: studentEmail, age: studentAge } = result.rows[0];
  return new Student(id, studentName, studentEmail, studentAge);
};

exports.updateStudent = async (id, name, email, age) => {
  const result = await pool.query(
    'UPDATE students SET name = $1, email = $2, age = $3 WHERE id = $4 RETURNING *',
    [name, email, age, id]
  );
  if (result.rows.length === 0) {
    return null;
  }
  const { id: studentId, name: studentName, email: studentEmail, age: studentAge } = result.rows[0];
  return new Student(studentId, studentName, studentEmail, studentAge);
};

exports.deleteStudent = async (id) => {
  const result = await pool.query('DELETE FROM students WHERE id = $1 RETURNING *', [id]);
  if (result.rows.length === 0) {
    return null;
  }
  const { id: studentId, name, email, age } = result.rows[0];
  return new Student(studentId, name, email, age);
};
