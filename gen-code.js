// Usage: node tools/gen-code.js 5   -> prints 5 Pro activation codes
const SEC = 'maral-2026';
const h = s => { let x = 5381; for (const c of s + SEC) x = ((x << 5) + x + c.charCodeAt(0)) >>> 0; return x.toString(16).padStart(8, '0').slice(0, 4).toUpperCase(); };
const n = +process.argv[2] || 1;
for (let i = 0; i < n; i++) { const a = Math.floor(Math.random() * 65536).toString(16).padStart(4, '0').toUpperCase(); console.log(`MARAL-${a}-${h(a)}`); }
