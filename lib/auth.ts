// Simple authentication helper
// In production, use NextAuth.js or similar

const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'admin123';

export function validateAdminPassword(password: string): boolean {
  return password === ADMIN_PASSWORD;
}

export function getAdminToken(): string {
  return 'admin-token-' + Date.now();
}

export function isAdminAuthenticated(token: string | null): boolean {
  if (!token) return false;
  // In production, validate token properly
  return token.startsWith('admin-token-');
}
