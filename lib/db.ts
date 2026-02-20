import { Pool } from 'pg';

let pool: Pool | null = null;

function ensurePool() {
  if (pool) return pool;
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error('DATABASE_URL environment variable is not set. Set it to enable database features.');
  }

  pool = new Pool({
    connectionString,
    ssl: {
      rejectUnauthorized: false,
    },
  });

  return pool;
}

export async function query(text: string, params?: any[]) {
  const start = Date.now();
  try {
    const p = ensurePool();
    const result = await p.query(text, params);
    const duration = Date.now() - start;
    console.log('Executed query', { text, duration, rows: result.rowCount });
    return result;
  } catch (error) {
    console.error('Database error', error);
    throw error;
  }
}

export async function getClient() {
  const p = ensurePool();
  return await p.connect();
}

export function getPoolIfExists() {
  return pool;
}

export default getPoolIfExists;
