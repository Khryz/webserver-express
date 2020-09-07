const express = require('express');
const app = express();

//importar hbs
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

const { text } = require('express');


hbs.registerPartials(__dirname + '/views/parciales');
//Usando todo en la carpeta public
app.use(express.static(__dirname + '/public'));




//Express HBS
app.set('view engine', 'hbs');





app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'christian',
        anio: new Date().getFullYear()
    });
});

app.get('/about', (req, res) => {

    res.render('about', {
        nombre: 'Christian',
        anio: new Date().getFullYear()
    });
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});