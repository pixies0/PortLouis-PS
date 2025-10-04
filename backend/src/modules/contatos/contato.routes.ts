import { Router } from 'express';
import { ContatoController } from './contato.controller';

export const contatoRoutes = Router();

contatoRoutes.post('/', ContatoController.create);
contatoRoutes.get('/', ContatoController.list);
contatoRoutes.patch('/:id', ContatoController.update);
contatoRoutes.delete('/:id', ContatoController.remove);
