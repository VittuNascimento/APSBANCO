const { Pool } = require('pg');
const { connectionConfig } = require('../config/database');

const pool = new Pool(connectionConfig);

const getAllCourses = async () => {
  const result = await pool.query('SELECT * FROM courses');
  return result.rows;
};

const getCourseById = async (id) => {
  const result = await pool.query('SELECT * FROM courses WHERE id = $1', [id]);
  return result.rows[0];
};

const createCourse = async (name, description, workload) => {
  const result = await pool.query(
    'INSERT INTO courses (name, description, workload) VALUES ($1, $2, $3) RETURNING *',
    [name, description, workload]
  );
  return result.rows[0];
};

module.exports = {
  getAllCourses,
  getCourseById,
  createCourse,
};
