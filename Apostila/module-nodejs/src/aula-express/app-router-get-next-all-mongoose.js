'use strict';

require('./db/config');

const express = require('express');
const app = express();
const router = express.Router();


// Cria o módulo de roteamento
router.all('*', (req, res, next) => {
  res.setHeader('Webschool', 'FODA');
  console.log('Hello World');
  next();
});

router.get('/', (req, res) => {
  require('./modules/pokemons/models/model-pokemon-list')(req, res);
});

// Passa o módulo para a URL /api/pokemons
app.use('/api/pokemons', router);

app.listen(3000, () => {
  console.log('Servidor rodando em localhost:3000');
});