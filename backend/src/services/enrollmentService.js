const { Pool } = require('pg');
const { connectionConfig } = require('../config/database');

const pool = new Pool(connectionConfig);

const getAllEnrollments = async () => {
  const result = await pool.query('SELECT * FROM enrollments');
  return result.rows;
};

const getEnrollmentById = async (id) => {
  const result = await pool.query('SELECT * FROM enrollments WHERE id = $1', [id]);
  return result.rows[0];
};

const createEnrollment = async (studentId, courseId, enrollmentDate) => {
  const result = await pool.query(
    'INSERT INTO enrollments (student_id, course_id, enrollment_date) VALUES ($1, $2, $3) RETURNING *',
    [studentId, courseId, enrollmentDate]
  );
  return result.rows[0];
};

module.exports = {
  getAllEnrollments,
  getEnrollmentById,
  createEnrollment,
};
