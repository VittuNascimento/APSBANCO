const { Pool } = require('pg');
const { connectionConfig } = require('../config/database');

const pool = new Pool(connectionConfig);

const getAllStudents = async () => {
  const result = await pool.query('SELECT * FROM students');
  return result.rows;
};

const getStudentById = async (id) => {
  const result = await pool.query('SELECT * FROM students WHERE id = $1', [id]);
  return result.rows[0];
};

const createStudent = async (name, email, age) => {
  const result = await pool.query(
    'INSERT INTO students (name, email, age) VALUES ($1, $2, $3) RETURNING *',
    [name, email, age]
  );
  return result.rows[0];
};

module.exports = {
  getAllStudents,
  getStudentById,
  createStudent,
};
