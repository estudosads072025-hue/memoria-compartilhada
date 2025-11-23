const express = require('express');
const router = express.Router();

let experiencias = [
  { id: 1, titulo: "História do Pelourinho", guia: "Maria", preco: 120 },
  { id: 2, titulo: "Culinária do Subúrbio", guia: "João", preco: 150 }
];

// Listar todas as experiências
router.get('/', (req, res) => {
  res.json(experiencias);
});

// Criar experiência (MVP - sem autenticação ainda)
router.post('/', (req, res) => {
  const nova = {
    id: experiencias.length + 1,
    titulo: req.body.titulo,
    guia: req.body.guia,
    preco: req.body.preco
  };

  experiencias.push(nova);
  res.status(201).json(nova);
});

module.exports = router;
