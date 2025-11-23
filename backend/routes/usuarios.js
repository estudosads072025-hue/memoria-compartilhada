const express = require('express');
const router = express.Router();

let usuarios = [
  { id: 1, nome: "Ana", email: "ana@gmail.com", tipo: "turista" },
  { id: 2, nome: "Carlos", email: "carlos@gmail.com", tipo: "turista" }
];

// Listar todos os usuários
router.get('/', (req, res) => {
  res.json(usuarios);
});

// Criar usuário (MVP)
router.post('/', (req, res) => {
  const novo = {
    id: usuarios.length + 1,
    nome: req.body.nome,
    email: req.body.email,
    tipo: "turista"
  };

  usuarios.push(novo);
  res.status(201).json(novo);
});

module.exports = router;
