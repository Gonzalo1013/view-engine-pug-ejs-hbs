const express = require('express')

const app = express()

app.set('view engine', 'pug')
app.set('views', './views')

app.use(express.json())
app.use(express.urlencoded({extended:false}))

const arr = [];



app.get('/', (req, res)=> {
    res.render('index')
})

app.get('/getAll', (req, res) => {
    res.render('products', {data:arr})
})

app.get('/form', (req, res) => {
    res.render('form')
})

app.post('/post', (req, res) => {
    arr.push(req.body)
    console.log(req.body);
    res.render('post')
})




app.listen(8080, ()=>{
    console.log('SERVER UP!!!');
})