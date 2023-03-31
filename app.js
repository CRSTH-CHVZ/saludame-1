var express = require('express');
var app = express();
app.get('/', (req, res) => {
    const nombre = req.query.nombre;
    res.send(`<h1>Hola ${ nombre ? nombre : 'desconocido' }!</h1>`);
});
app.listen(3000, () => {
    console.log("Listening on 3000!");
});