import { describe, expect, it } from 'vitest';
import { evaluateContactRateLimit } from '@/lib/contact-rate-limit';

describe('contact rate limit', () => {
  it('bloqueia envios em sequência imediata na mesma sessão', () => {
    const sessionId = 'session-cooldown';
    const start = Date.now();

    const first = evaluateContactRateLimit(sessionId, start);
    const second = evaluateContactRateLimit(sessionId, start + 500);

    expect(first.allowed).toBe(true);
    expect(second.allowed).toBe(false);
  });

  it('permite novo envio após cooldown', () => {
    const sessionId = 'session-next';
    const start = Date.now();

    evaluateContactRateLimit(sessionId, start);
    const next = evaluateContactRateLimit(sessionId, start + 61_000);

    expect(next.allowed).toBe(true);
  });
});
