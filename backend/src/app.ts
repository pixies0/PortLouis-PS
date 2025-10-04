import express from 'express';
import cors from 'cors';
import { errorMiddleware } from './core/errorMiddleware';
import { contatoRoutes } from './modules/contatos/contato.routes';

export const app = express();
app.use(cors());
app.use(express.json());

app.use('/contatos', contatoRoutes);

app.use(errorMiddleware);
