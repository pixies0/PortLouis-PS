import type { Request, Response, NextFunction } from 'express';
import { container } from '../../core/container';
import LoggerService from '../../services/LoggerService';

export const ContatoController = {
  create: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const created = await container.contatoService.create(req.body);

      console.log("===================================================================")
      LoggerService.info('Contato criado com sucesso', {
        body: req.body,
        id: created?.id,
      });

      res.status(201).json({ message: 'Contato criado com sucesso.', created });
    } catch (e) {
      console.log("===================================================================")
      LoggerService.error('Erro ao criar contato', {
        error: (e as Error).message,
        stack: (e as Error).stack,
      });
      next(e);
    }
  },

  list: async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await container.contatoService.list();
      console.log("===================================================================")
      LoggerService.info('Lista de contatos recuperada', {
        total: data?.length,
      });

      res.json(data);
    } catch (e) {
      console.log("===================================================================")
      LoggerService.error('Erro ao listar contatos', {
        error: (e as Error).message,
        stack: (e as Error).stack,
      });
      next(e);
    }
  },

  update: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);
      const updated = await container.contatoService.update(id, req.body);
      console.log("===================================================================")
      LoggerService.info('Contato atualizado com sucesso', {
        id,
        body: req.body,
      });

      res.json({ message: 'Contato atualizado com sucesso.', updated });
    } catch (e) {
      console.log("===================================================================")
      LoggerService.error('Erro ao atualizar contato', {
        error: (e as Error).message,
        stack: (e as Error).stack,
        id: req.params.id,
      });
      next(e);
    }
  },

  remove: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);
      await container.contatoService.remove(id);

      console.log("===================================================================")
      LoggerService.info('Contato deletado com sucesso', { id });

      res.setHeader('X-Message', 'Contato deletado com sucesso.');
      return res.status(204).send();
    } catch (e) {
      console.log("===================================================================")
      LoggerService.error('Erro ao deletar contato', {
        error: (e as Error).message,
        stack: (e as Error).stack,
        id: req.params.id,
      });
      next(e);
    }
  },
};
