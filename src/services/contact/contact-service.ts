import type { ContactInput } from '@/lib/validators/contact';

export interface ContactService {
  sendMessage(input: ContactInput): Promise<{ success: boolean }>;
}

export class MockContactService implements ContactService {
  async sendMessage(input: ContactInput): Promise<{ success: boolean }> {
    void input;
    await new Promise((resolve) => setTimeout(resolve, 250));
    return { success: true };
  }
}
