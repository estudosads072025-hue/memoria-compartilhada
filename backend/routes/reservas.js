const express = require('express');
const router = express.Router();

let reservas = [];

// Listar reservas
router.get('/', (req, res) => {
  res.json(reservas);
});

// Criar uma reserva
router.post('/', (req, res) => {
  const nova = {
    id: reservas.length + 1,
    usuarioId: req.body.usuarioId,
    experienciaId: req.body.experienciaId,
    data: req.body.data,
    participantes: req.body.participantes
  };

  reservas.push(nova);
  res.status(201).json(nova);
});

module.exports = router;
