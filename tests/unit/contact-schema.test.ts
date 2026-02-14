import { describe, expect, it } from 'vitest';
import { contactSchema } from '@/lib/validators/contact';

describe('contactSchema', () => {
  it('aceita payload valido', () => {
    const result = contactSchema.safeParse({
      name: 'Roberto Filho',
      email: 'zferraz.rf@gmail.com',
      message: 'Mensagem com tamanho suficiente para validacao.'
    });

    expect(result.success).toBe(true);
  });

  it('rejeita payload invalido', () => {
    const result = contactSchema.safeParse({
      name: 'Ro',
      email: 'sem-email',
      message: 'curta'
    });

    expect(result.success).toBe(false);
  });
});
