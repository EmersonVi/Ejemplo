const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Clientes route');
});

module.exports = router;

