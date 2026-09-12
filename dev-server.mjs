import { spawn } from 'node:child_process';

// Next.js dev server wrapper
// Ignores any extraneous positional arguments that npm may pass (such as `3000` from `npm run dev --port 3000`)
const nextBin = './node_modules/.bin/next';
const child = spawn(nextBin, ['dev', '-p', '3000', '-H', '0.0.0.0'], {
  stdio: 'inherit',
  env: process.env,
});

child.on('exit', (code) => {
  process.exit(code ?? 0);
});

process.on('SIGINT', () => child.kill('SIGINT'));
process.on('SIGTERM', () => child.kill('SIGTERM'));
