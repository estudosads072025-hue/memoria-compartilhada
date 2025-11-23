const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// ------------ Rotas Importadas ------------
const experienciasRoutes = require('./routes/experiencias');
const usuariosRoutes = require('./routes/usuarios');
const guiasRoutes = require('./routes/guias');
const reservasRoutes = require('./routes/reservas');

// ------------ Conectando Rotas ------------
app.use('/experiencias', experienciasRoutes);
app.use('/usuarios', usuariosRoutes);
app.use('/guias', guiasRoutes);
app.use('/reservas', reservasRoutes);

// ------------ Rota básica para testar ------------
app.get('/', (req, res) => {
  res.json({ message: "API Memória Compartilhada funcionando!" });
});

// ------------ Inicializando Servidor ------------
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
