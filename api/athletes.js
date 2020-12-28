const express = require('express'); 
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Obteniendo el recurso de atletas');
});
router.post('/', (req, res) => {
    res.send('Creando un nuevo recurso de atletas');
});
router.put('/', (req, res) => {
    res.send('Modificar un recurso de atletas');
});
router.delete('/', (req, res) => {
    res.send('eliminar un recurso de atletas');
});

module.exports = router;