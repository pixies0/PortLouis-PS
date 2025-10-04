import { pool } from '../../db/pool';
import type { Contato, CreateContatoDTO, UpdateContatoDTO } from './contato.types';
import type { ContatoRepository } from './contato.repository';

export class MySQLContatoRepository implements ContatoRepository {
  async create(data: CreateContatoDTO): Promise<Contato> {
    const [result] = await pool.execute<any>(
      'INSERT INTO contatos (nome, telefone) VALUES (?, ?)', [data.nome.trim(), data.telefone.trim()]
    );
    const id = result.insertId as number;
    const [rows] = await pool.execute<any>('SELECT * FROM contatos WHERE id = ?', [id]);
    return rows[0] as Contato;
  }

  async list(): Promise<Contato[]> {
    const [rows] = await pool.execute<any>('SELECT * FROM contatos ORDER BY id DESC');
    return rows as Contato[];
  }

  async update(id: number, data: UpdateContatoDTO): Promise<Contato> {
    const [exists] = await pool.execute<any>('SELECT id FROM contatos WHERE id = ?', [id]);
    if ((exists as any[]).length === 0) {
      const e: any = new Error('Não encontrado.');
      e.status = 404;
      throw e;
    }
    await pool.execute('UPDATE contatos SET nome = ?, telefone = ? WHERE id = ?', [data.nome.trim(), data.telefone.trim(), id]);
    const [rows] = await pool.execute<any>('SELECT * FROM contatos WHERE id = ?', [id]);
    return rows[0] as Contato;
  }

  async remove(id: number): Promise<void> {
    const [exists] = await pool.execute<any>('SELECT id FROM contatos WHERE id = ?', [id]);
    if ((exists as any[]).length === 0) {
      const e: any = new Error('Contato não encontrado.');
      e.status = 404;
      throw e;
    }
    await pool.execute('DELETE FROM contatos WHERE id = ?', [id]);
  }
}
