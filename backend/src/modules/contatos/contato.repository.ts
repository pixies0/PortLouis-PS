import type { Contato, CreateContatoDTO, UpdateContatoDTO } from './contato.types';

export interface ContatoRepository {
  create(data: CreateContatoDTO): Promise<Contato>;
  list(): Promise<Contato[]>;
  update(id: number, data: UpdateContatoDTO): Promise<Contato>;
  remove(id: number): Promise<void>;
}
