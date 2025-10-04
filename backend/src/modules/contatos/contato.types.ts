export type Contato = {
  id: number;
  nome: string;
  telefone: string;
  created_at: Date;
};

export type CreateContatoDTO = {
  nome: string;
  telefone: string;
};

export type UpdateContatoDTO = {
  nome: string;
  telefone: string;
};
