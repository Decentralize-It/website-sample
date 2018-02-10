const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const ejs = require('ejs');
const path = require('path');
var depLinker = require('dep-linker');

// depLinker.setRoot('node_modules/bootstrap/dist')
depLinker.linkDependenciesTo('./public/scripts')

app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/contact', (req, res) => {
    res.render('contact')
})

app.get('/aboutus', (req, res) => {
    res.render('aboutus')
})

app.get('/addlink', (req, res) => {
    res.render('addlink')
})

app.listen(PORT, () => console.log(`APPLICATION LIVE ON ${PORT}`))