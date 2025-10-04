import { z } from 'zod';

export const contatoSchema = z.object({
  nome: z.string().trim().refine(v => {
    const words = v.split(/\s+/);
    return words.length >= 2 && words.every(w => /^[A-Za-zÀ-ÿ]{3,}$/.test(w));
  }, { message: 'Informe pelo menos 2 palavras de 3+ letras.' }),
  telefone: z.string().regex(/^\(\d{2}\)\d{4}-\d{4}$/, 'Formato (xx)xxxx-xxxx.')
});
