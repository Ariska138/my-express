const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());

app.use(cors()); // api bisa diakses dibeda server/domain

// Ini akan menangkap domain.com/api/hello
app.get('/api/hello', (req, res) => {
  res.json({
    status: 'success',
    message: 'Hello World dari Vercel!',
  });
});

// Root route untuk testing
app.get('/', (req, res) => {
  res.send('Server Express Berjalan');
});

// PENTING: Hanya jalankan listen di local
if (process.env.NODE_ENV !== 'production') {
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Local running on http://localhost:${PORT}`);
  });
}

module.exports = app;
