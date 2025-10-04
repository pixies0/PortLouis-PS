import type { Request, Response, NextFunction } from 'express';
import { container } from '../../core/container';

export const ContatoController = {
  create: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const created = await container.contatoService.create(req.body);
      res.status(201).json({message: "Contato criado com sucesso.", created});
    } catch (e) { next(e); }
  },
  list: async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await container.contatoService.list();
      res.json(data);
    } catch (e) { next(e); }
  },
  update: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);
      const updated = await container.contatoService.update(id, req.body);
      res.json({message: "Contato atualizado com sucesso.", updated});
    } catch (e) { next(e); }
  },
  remove: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);
      await container.contatoService.remove(id);
      res.status(200).json({ message: "Contato deletado com sucesso." });
    } catch (e) { next(e); }
  },
};
