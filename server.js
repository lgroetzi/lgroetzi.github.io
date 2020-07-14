const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const PAGES_WE_HANDLE = [
  '/',
  '/collabs',
  '/justworks',
];

app.prepare().then(() => {
  const server = express()

  PAGES_WE_HANDLE.forEach(page => server.get(page, (req, res) =>
    app.render(req, res, page, req.query)
  ));

  server.all('*', (req, res) => handle(req, res));

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`);
  });
});
