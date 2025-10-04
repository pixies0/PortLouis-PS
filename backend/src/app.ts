import express from 'express';
import cors from 'cors';
import { errorMiddleware } from './core/errorMiddleware';
import { requestLogger } from './core/loggerMiddleware';
import { contatoRoutes } from './modules/contatos/contato.routes';

export const app = express();
app.use(cors());
app.use(express.json());

app.use(requestLogger);

app.use('/contatos', contatoRoutes);

app.use(errorMiddleware);
