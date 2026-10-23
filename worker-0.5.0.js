// SecureVault API 0.5.0 placeholder - full source in artifacts/license-platform/worker/worker.js
// Deploy via wrangler from local: wrangler deploy
export default { async fetch() { return new Response(JSON.stringify({ status: 'ok', version: '0.5.0-pending-deploy' }), { headers: { 'Content-Type': 'application/json' } }); } };
