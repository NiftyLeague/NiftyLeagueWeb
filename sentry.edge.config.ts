import * as Sentry from '@sentry/nextjs';

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;

Sentry.init({
  dsn: SENTRY_DSN || 'https://97a944f1560b45018f013090ced577b3@o1377979.ingest.sentry.io/4504089815351296',
  tracesSampleRate: 1.0,
});
