import type { ContactInput } from '@/lib/validators/contact';
import nodemailer from 'nodemailer';

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

type SmtpConfig = {
  host: string;
  port: number;
  secure: boolean;
  user: string;
  pass: string;
  from: string;
  to: string;
};

export class SmtpContactService implements ContactService {
  constructor(private readonly config: SmtpConfig) {}

  async sendMessage(input: ContactInput): Promise<{ success: boolean }> {
    const safeName = escapeHtml(input.name);
    const safeEmail = escapeHtml(input.email);
    const safeMessage = escapeHtml(input.message).replace(/\n/g, '<br/>');
    const sentAt = new Date().toLocaleString('pt-BR', {
      dateStyle: 'full',
      timeStyle: 'short'
    });

    const transporter = nodemailer.createTransport({
      host: this.config.host,
      port: this.config.port,
      secure: this.config.secure,
      connectionTimeout: 10_000,
      greetingTimeout: 10_000,
      socketTimeout: 15_000,
      auth: {
        user: this.config.user,
        pass: this.config.pass
      }
    });

    await transporter.sendMail({
      from: this.config.from,
      to: this.config.to,
      replyTo: input.email,
      subject: `[Portfólio] Nova mensagem de ${input.name}`,
      text: [
        `Nome: ${input.name}`,
        `E-mail: ${input.email}`,
        '',
        'Mensagem:',
        input.message
      ].join('\n'),
      html: `
        <div style="margin:0;padding:24px;background:#f4efe6;font-family:'Space Grotesk',Segoe UI,Roboto,Arial,sans-serif;color:#1b2430;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:700px;margin:0 auto;background:#fffaf2;border:1px solid #e2d7ca;border-radius:16px;overflow:hidden;">
            <tr>
              <td style="padding:22px 24px;background:linear-gradient(135deg,#1b2430,#2a3645);">
                <p style="margin:0 0 6px;color:#f4a259;font-size:12px;letter-spacing:.16em;text-transform:uppercase;font-weight:700;">Engenheiro de Software</p>
                <h1 style="margin:0;color:#ffffff;font-size:24px;line-height:1.2;">Nova mensagem de contato</h1>
              </td>
            </tr>
            <tr>
              <td style="padding:20px 24px;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:separate;border-spacing:0 10px;background:#ffffff;border:1px solid #e8ded3;border-radius:12px;padding:10px 14px;">
                  <tr>
                    <td style="width:120px;color:#5f6b7a;font-size:13px;font-weight:700;">Nome</td>
                    <td style="font-size:15px;font-weight:600;color:#1b2430;">${safeName}</td>
                  </tr>
                  <tr>
                    <td style="color:#5f6b7a;font-size:13px;font-weight:700;">E-mail</td>
                    <td style="font-size:15px;font-weight:600;color:#1b2430;">
                      <a href="mailto:${safeEmail}" style="color:#2563eb;text-decoration:none;">${safeEmail}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="color:#5f6b7a;font-size:13px;font-weight:700;">Recebido em</td>
                    <td style="font-size:14px;color:#1b2430;">${sentAt}</td>
                  </tr>
                </table>

                <div style="margin-top:14px;border:1px solid #e6d8ca;background:#fffefc;border-radius:12px;padding:16px;">
                  <p style="margin:0 0 8px;font-size:13px;font-weight:700;color:#d36135;text-transform:uppercase;letter-spacing:.1em;">Mensagem</p>
                  <p style="margin:0;font-size:15px;line-height:1.65;color:#1b2430;">${safeMessage}</p>
                </div>

                <div style="margin-top:18px;">
                  <a href="mailto:${safeEmail}" style="display:inline-block;background:#d36135;color:#ffffff;text-decoration:none;padding:10px 14px;border-radius:10px;font-weight:700;font-size:14px;">Responder agora</a>
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding:14px 24px;border-top:1px solid #e8ded3;color:#5f6b7a;font-size:12px;">
                Enviado automaticamente pelo formulário de contato do site de Roberto Filho.
              </td>
            </tr>
          </table>
        </div>
      `
    });

    return { success: true };
  }
}

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function getSmtpConfig(): SmtpConfig {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? '587');
  const secure = process.env.SMTP_SECURE === 'true';
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.CONTACT_EMAIL_FROM;
  const to = process.env.CONTACT_EMAIL_TO;

  if (!host || !user || !pass || !from || !to || Number.isNaN(port)) {
    throw new Error(
      'Configuração SMTP inválida. Defina SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_EMAIL_FROM e CONTACT_EMAIL_TO.'
    );
  }

  return { host, port, secure, user, pass, from, to };
}

export function createContactService(): ContactService {
  const provider = process.env.CONTACT_PROVIDER ?? 'smtp';

  if (provider === 'mock') {
    return new MockContactService();
  }

  return new SmtpContactService(getSmtpConfig());
}
