import { Request, Response, NextFunction } from 'express';
import LoggerService from '../services/LoggerService';

export function requestLogger(req: Request, res: Response, next: NextFunction): void {
  const start = Date.now();

  res.on('finish', () => {
    const duration = Date.now() - start;
    const timestamp = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });

    LoggerService.info(`${req.method} ${req.originalUrl}`, {
      timestamp,
      statusCode: res.statusCode,
      responseTime: `${duration}ms`,
      ip: req.ip,
    });
  });

  next();
}
