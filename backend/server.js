const express = require('express');
const cors = require('cors');
const usuariosRoutes = require('./routes/usuarios');

const app = express();

const PORT = 5001;

app.use(cors());
app.use(express.json());

app.use('/api/usuarios', usuariosRoutes);

app.get('/', (req, res) => {
res.json({ message: 'API de Usuarios funcionando correctamente' });
});

app.listen(PORT, () => {
console.log(`🚀 Servidor corriendo en
http://localhost:${PORT}`);
});

// backend/server.js o en routes/login.js
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  // Simulación (reemplaza con consulta real a BD)
  if (email === 'admin@gmail.com' && password === '123456') {
    res.json({ success: true, role: 'admin' });
  } else if (email === 'user@gmail.com' && password === '123456') {
    res.json({ success: true, role: 'user' });
  } else {
    res.status(401).json({ message: 'Credenciales incorrectas' });
  }
});