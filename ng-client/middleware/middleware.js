const express = require('express');
const expressWsMiddleware = require('express-ws');
const cors = require('cors');

const axios = require('axios');
const app = expressWsMiddleware(express()).app;

app.use(cors());

app.get('/products/:id', (req, res) => {
  axios.get('http://localhost:3000/products').then(resp => {
    const filteredProducts = resp.data.filter(product => {
      return product.id.includes(req.params.id);
    });
    res.send(filteredProducts);
  });
});

app.listen(3001, () => {
  console.log('Middleware listening on port 3001!');
});
