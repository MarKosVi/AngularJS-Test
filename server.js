const express = require('express');
const app = express();
const path = require('path');

const port = 3001;

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'src/index.html')));
app.listen(port, ()=> console.log('servidor rodando na localhost:'+port));