import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(3, 'Informe ao menos 3 caracteres'),
  email: z.string().email('Informe um e-mail valido'),
  message: z.string().min(20, 'A mensagem precisa ter ao menos 20 caracteres')
});

export type ContactInput = z.infer<typeof contactSchema>;
