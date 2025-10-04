import type { Request, Response, NextFunction } from 'express';

export function errorMiddleware(err: any, _req: Request, res: Response, _next: NextFunction) {
  const status = typeof err?.status === 'number' ? err.status : 500;
  const message = typeof err?.message === 'string' && err.message ? err.message : 'Erro interno';
  if (status >= 500) console.error(err);
  res.status(status).json({ message });
}
