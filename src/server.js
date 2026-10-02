// server.js — binds the app to a port. `npm start` runs this.
const { createApp } = require('./app');

const port = Number(process.env.PORT) || 8080;
const app = createApp();

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
