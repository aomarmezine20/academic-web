#!/usr/bin/env node
/**
 * Simple migration runner for local/deployment use.
 * Requires: DATABASE_URL env var.
 */
const fs = require('fs');
const path = require('path');
const { Client } = require('pg');

async function run() {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    console.error('DATABASE_URL is not set. Aborting.');
    process.exit(1);
  }

  const client = new Client({ connectionString: databaseUrl });

  try {
    await client.connect();
    const migrationsDir = path.join(__dirname, '..', 'migrations');
    const files = fs.readdirSync(migrationsDir).filter(f => f.endsWith('.sql'));
    files.sort();

    for (const file of files) {
      const sql = fs.readFileSync(path.join(migrationsDir, file), 'utf8');
      console.log('Running migration:', file);
      await client.query(sql);
    }

    console.log('Migrations completed');
  } catch (err) {
    console.error('Migration failed', err);
    process.exit(1);
  } finally {
    await client.end();
  }
}

run();
