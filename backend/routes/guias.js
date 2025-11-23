const express = require('express');
const router = express.Router();

let guias = [
  { id: 1, nome: "Marta", bairro: "Pelourinho", verificado: true },
  { id: 2, nome: "João", bairro: "Liberdade", verificado: false }
];

// Listar guias
router.get('/', (req, res) => {
  res.json(guias);
});

// Criar guia
router.post('/', (req, res) => {
  const novo = {
    id: guias.length + 1,
    nome: req.body.nome,
    bairro: req.body.bairro,
    verificado: false
  };

  guias.push(novo);
  res.status(201).json(novo);
});

module.exports = router;
