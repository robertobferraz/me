const CONTACT_SESSION_COOKIE = 'contact_session_id';

type SessionState = {
  windowStart: number;
  lastSentAt: number;
  count: number;
};

type RateLimitAllowed = {
  allowed: true;
};

type RateLimitBlocked = {
  allowed: false;
  retryAfterSec: number;
  reason: 'cooldown' | 'window';
};

const SESSION_STORE = new Map<string, SessionState>();

function getNumberEnv(name: string, fallback: number): number {
  const value = Number(process.env[name] ?? `${fallback}`);
  return Number.isFinite(value) && value > 0 ? value : fallback;
}

const MIN_INTERVAL_MS = getNumberEnv('CONTACT_MIN_INTERVAL_MS', 60_000);
const WINDOW_MS = getNumberEnv('CONTACT_SESSION_WINDOW_MS', 15 * 60_000);
const MAX_MESSAGES_PER_WINDOW = getNumberEnv('CONTACT_SESSION_MAX_MESSAGES', 4);
const SESSION_COOKIE_MAX_AGE_SEC = getNumberEnv(
  'CONTACT_SESSION_COOKIE_MAX_AGE_SEC',
  60 * 60 * 24
);

function cleanupExpiredSessions(now: number) {
  if (SESSION_STORE.size < 500) {
    return;
  }

  for (const [sessionId, state] of SESSION_STORE.entries()) {
    if (now - state.windowStart > WINDOW_MS * 4) {
      SESSION_STORE.delete(sessionId);
    }
  }
}

export function evaluateContactRateLimit(
  sessionId: string,
  now = Date.now()
): RateLimitAllowed | RateLimitBlocked {
  cleanupExpiredSessions(now);

  const current = SESSION_STORE.get(sessionId);

  if (!current) {
    SESSION_STORE.set(sessionId, {
      windowStart: now,
      lastSentAt: now,
      count: 1
    });
    return { allowed: true };
  }

  if (now - current.windowStart > WINDOW_MS) {
    SESSION_STORE.set(sessionId, {
      windowStart: now,
      lastSentAt: now,
      count: 1
    });
    return { allowed: true };
  }

  const cooldownRemaining = MIN_INTERVAL_MS - (now - current.lastSentAt);
  if (cooldownRemaining > 0) {
    return {
      allowed: false,
      retryAfterSec: Math.ceil(cooldownRemaining / 1000),
      reason: 'cooldown'
    };
  }

  if (current.count >= MAX_MESSAGES_PER_WINDOW) {
    const windowRemaining = WINDOW_MS - (now - current.windowStart);
    return {
      allowed: false,
      retryAfterSec: Math.max(1, Math.ceil(windowRemaining / 1000)),
      reason: 'window'
    };
  }

  SESSION_STORE.set(sessionId, {
    ...current,
    lastSentAt: now,
    count: current.count + 1
  });

  return { allowed: true };
}

export function getContactSessionCookieName() {
  return CONTACT_SESSION_COOKIE;
}

export function getContactSessionCookieMaxAgeSec() {
  return SESSION_COOKIE_MAX_AGE_SEC;
}
