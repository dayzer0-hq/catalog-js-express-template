// app.js — the Express application, exported so tests can drive it without binding a port.
// This is the shared starter for the DayZer0 JS + Express briefs: it carries the health route
// and nothing brief-specific. Build your feature on top by adding routes here.
const express = require('express');

function createApp() {
  const app = express();
  app.use(express.json());

  // Liveness probe. Keep this; the setup ticket confirms the service with it.
  app.get('/healthz', (_req, res) => {
    res.json({ status: 'ok' });
  });

  return app;
}

module.exports = { createApp };
