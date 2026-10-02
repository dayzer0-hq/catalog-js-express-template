// health.test.js — proves the skeleton runs under `node --test`. Add your own tests beside it.
const test = require('node:test');
const assert = require('node:assert');
const { createApp } = require('../src/app');

test('GET /healthz returns 200 and {status:"ok"}', async () => {
  const server = createApp().listen(0);
  try {
    const { port } = server.address();
    const res = await fetch(`http://localhost:${port}/healthz`);
    assert.strictEqual(res.status, 200);
    assert.deepStrictEqual(await res.json(), { status: 'ok' });
  } finally {
    server.close();
  }
});
