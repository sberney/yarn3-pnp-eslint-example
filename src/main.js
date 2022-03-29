import express from 'express';

const app = express();
app.get('/', (req, res) => {
  res.send('hello world');
});

const port = process.env.PORT || 3000;
console.log('Starting server...');
app.listen(port, () => console.log(`Listening on port ${port}...`));