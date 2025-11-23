const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rota de teste da API
app.get('/', (req, res) => {
  res.json({ message: "API Memória Compartilhada funcionando!" });
});

// Rota inicial de experiências (exemplo)
app.get('/experiencias', (req, res) => {
  res.json([
    { id: 1, titulo: "História do Pelourinho", guia: "Maria", preco: 120 },
    { id: 2, titulo: "Culinária do Subúrbio", guia: "João", preco: 150 }
  ]);
});

// Rotas
const experienciasRoutes = require('./routes/experiencias');
app.use('/experiencias', experienciasRoutes);

// Inicializando servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
