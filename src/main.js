import { registerRoutes } from './some-routes.js';

import express from 'express';

const app = express();
app.get('/', (req, res) => {
  res.send('hello world');
});

registerRoutes(app);

const port = process.env.PORT || 3000;
console.log('Starting server...');
app.listen(port, () => console.log(`Listening on port ${port}...`));