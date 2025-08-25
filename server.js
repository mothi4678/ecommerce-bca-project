const express = require('express');
    const app = express();
    const db = require('./database.js'); 
    const port = 3000;
    
    app.use(express.static('public')); 
    app.get('/api/products', (req, res) => {
  const sql = 'SELECT * FROM products';
  db.all(sql, [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: rows
    });
  });
});
    
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });