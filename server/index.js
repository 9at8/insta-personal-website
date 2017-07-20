import express from 'express';

const app = express();

app.get('/api', (req, res) => {
  console.log('gg!');
  res.send('Hello World!');
});

app.get('/api/gg', (req, res) => {
  console.log('wp!');
  res.send('gg!');
});

app.listen(9090);
