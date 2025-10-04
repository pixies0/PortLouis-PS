import { ContatoService } from '../modules/contatos/contato.service';
import { MySQLContatoRepository } from '../modules/contatos/mysql.contato.repository';

export const container = {
  contatoService: new ContatoService(new MySQLContatoRepository())
};
