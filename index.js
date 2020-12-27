const express = require('express');
const app = express();

app.get('/api/athletes', (req, res) => {
    res.send('Obteniendo el recurso de atletas');
});
app.post('/api/athletes', (req, res) => {
    res.send('Creando un nuevo recurso de atletas');
});

app.get('/api/sports', (req, res) => {
    res.send('Obteniendo el recurso de deportes');
});
app.post('/api/sports', (req, res) => {
    res.send('Creando un nuevo recurso de deportes');
});


app.listen(8080, () => {
    console.log('App listening on port 8080');
});