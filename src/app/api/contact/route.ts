import { randomUUID } from 'node:crypto';
import { NextRequest, NextResponse } from 'next/server';
import {
  evaluateContactRateLimit,
  getContactSessionCookieMaxAgeSec,
  getContactSessionCookieName
} from '@/lib/contact-rate-limit';
import { contactSchema } from '@/lib/validators/contact';
import { createContactService } from '@/services/contact/contact-service';

export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  try {
    const sessionCookieName = getContactSessionCookieName();
    const sessionId = request.cookies.get(sessionCookieName)?.value ?? randomUUID();
    const rateLimit = evaluateContactRateLimit(sessionId);

    if (!rateLimit.allowed) {
      const message =
        rateLimit.reason === 'cooldown'
          ? `Aguarde ${rateLimit.retryAfterSec}s para enviar outra mensagem.`
          : 'Limite de envios por sessão atingido. Tente novamente mais tarde.';
      const response = NextResponse.json(
        { success: false, message },
        {
          status: 429,
          headers: { 'Retry-After': `${rateLimit.retryAfterSec}` }
        }
      );
      response.cookies.set(sessionCookieName, sessionId, {
        httpOnly: true,
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
        maxAge: getContactSessionCookieMaxAgeSec(),
        path: '/'
      });
      return response;
    }

    const payload = await request.json();

    if (
      typeof payload === 'object' &&
      payload !== null &&
      'website' in payload &&
      typeof payload.website === 'string' &&
      payload.website.trim().length > 0
    ) {
      const response = NextResponse.json({ success: true });
      response.cookies.set(sessionCookieName, sessionId, {
        httpOnly: true,
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
        maxAge: getContactSessionCookieMaxAgeSec(),
        path: '/'
      });
      return response;
    }

    const parsed = contactSchema.safeParse(payload);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, errors: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const service = createContactService();
    const result = await service.sendMessage(parsed.data);

    const response = NextResponse.json(result);
    response.cookies.set(sessionCookieName, sessionId, {
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      maxAge: getContactSessionCookieMaxAgeSec(),
      path: '/'
    });

    return response;
  } catch (error) {
    console.error('Erro ao enviar contato', error);
    return NextResponse.json(
      { success: false, message: 'Erro ao enviar mensagem.' },
      { status: 500 }
    );
  }
}
