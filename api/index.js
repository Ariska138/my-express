const express = require('express');

const app = express();

app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello World' });
});

if (process.env.NODE_ENV !== 'production') {
  app.listen(3000, () => {
    console.log('http://localhost:3000');
  });
}

module.exports = app;
