# catalog-js-express-template

A minimal **JavaScript + Express (Node)** starter for DayZer0 catalog briefs. Your project
repository is provisioned from this template, so the Node package and Express are already here —
you clone it, confirm it runs, then build your feature on top.

## What's here

- `src/app.js` — the Express app, with a `GET /healthz` route and nothing brief-specific.
- `src/server.js` — binds the app to a port (`PORT`, default 8080).
- `test/health.test.js` — one passing test, run with `node --test`.

## Requirements

- Node 20 or newer.

## Run it

```bash
npm install
npm start
```

Then, in another terminal:

```bash
curl http://localhost:8080/healthz
# {"status":"ok"}
```

## Test it

```bash
npm test
```

## Build on top

Add your routes in `src/app.js` (keep the business logic in plain functions so it can be tested
without HTTP). One ticket, one branch (`issue-N-<slug>`), one pull request with `Closes #N`.
