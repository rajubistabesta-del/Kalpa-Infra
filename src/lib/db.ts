import { PrismaClient } from '@prisma/client';

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

const db = global.prisma || new PrismaClient({
  log: ['query', 'warn', 'error'],
});

if (process.env.NODE_ENV !== 'production') {
  global.prisma = db;
}

// ✅ MUST be default export
export default db;

