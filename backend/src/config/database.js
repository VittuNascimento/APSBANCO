const { Client } = require('pg');

const connectionConfig = {
  user: 'postgres',
  host: 'localhost',
  database: 'estudanteDatabase',
  password: '23203004',
  port: 5432,
};

const client = new Client(connectionConfig);

const connectToDatabase = async () => {
  try {
    await client.connect();
    console.log('Conectado ao banco de dados!');
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
    throw error;
  }
};

const closeConnection = async () => {
  try {
    await client.end();
    console.log('Conexão com o banco de dados encerrada.');
  } catch (error) {
    console.error('Erro ao encerrar a conexão com o banco de dados:', error);
    throw error;
  }
};

module.exports = {
  connectionConfig,
  connectToDatabase,
  closeConnection,
  client,
};
