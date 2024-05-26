const { Pool } = require('pg');
const { connectionConfig } = require('../config/database');

const pool = new Pool(connectionConfig);

const getAllInstructors = async () => {
  const result = await pool.query('SELECT * FROM instructors');
  return result.rows;
};

const getInstructorById = async (id) => {
  const result = await pool.query('SELECT * FROM instructors WHERE id = $1', [id]);
  return result.rows[0];
};

const createInstructor = async (name, email, subject) => {
  const result = await pool.query(
    'INSERT INTO instructors (name, email, subject) VALUES ($1, $2, $3) RETURNING *',
    [name, email, subject]
  );
  return result.rows[0];
};

module.exports = {
  getAllInstructors,
  getInstructorById,
  createInstructor,
};
