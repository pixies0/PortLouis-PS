import { Router } from 'express';
import mysql from 'mysql2/promise';

export const healthRoutes = Router();

healthRoutes.get('/server', (req, res) => {
  res.status(200).json({
    status: 'ok',
    message: 'Servidor está em execução 🚀',
    timestamp: new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' }),
  });
});

healthRoutes.get('/database', async (req, res) => {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || 'meubanco',
    });

    await connection.query('SELECT 1');
    await connection.end();

    res.status(200).json({
      status: 'ok',
      message: 'Conexão com o banco de dados bem-sucedida ✅',
      timestamp: new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' }),
    });
  } catch (err: any) {
    res.status(500).json({
      status: 'error',
      message: 'Falha ao conectar ao banco de dados ❌',
      details: err.message,
      timestamp: new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' }),
    });
  }
});
