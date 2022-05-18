const express = require('express');
const app = express()
const handlebars = require("express-handlebars");

app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.set('view engine', 'hbs')
app.set('views', './views')


app.engine(
    'hbs',
    handlebars.engine({
        extname: 'hbs',
        layoutsDir: __dirname + '/views/layouts',
        defaultLayout: 'home',
        partialsDir: __dirname + '/views/partials'
    }))


let arr = [];

app.get('/', (req, res)  => {   
    res.render('main',)
})

app.get('/getAll' , (req, res) => {
    res.render('product', {layout:'products', data:arr})
})

app.get('/form', (req, res) => {
    res.render('formulario', {layout:'form'})
})

app.post('/post', (req, res)=> {
    arr.push(req.body)
    res.render('post')
})

app.listen(8080, ()=> {
    console.log('Server OK!');
})