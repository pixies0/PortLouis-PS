import { contatoSchema } from './contato.schema';
import type { ContatoRepository } from './contato.repository';
import type { CreateContatoDTO, UpdateContatoDTO, Contato } from './contato.types';

export class ContatoService {
  constructor(private repo: ContatoRepository) {}

  async create(dto: CreateContatoDTO): Promise<Contato> {
    contatoSchema.parse(dto);
    return this.repo.create(dto);
  }
  async list(): Promise<Contato[]> {
    return this.repo.list();
  }
  async update(id: number, dto: UpdateContatoDTO): Promise<Contato> {
    contatoSchema.parse(dto);
    return this.repo.update(id, dto);
  }
  async remove(id: number): Promise<void> {
    return this.repo.remove(id);
  }
}
