const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const ejs = require('ejs');

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

app.listen(PORT, () => console.log(`APPLICATION LIVE ON ${PORT}`))
