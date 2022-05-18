const express = require('express')
const multer = require('multer')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))

app.set('view engine' , 'ejs')
app.set('views', './views')




const arr = [];

app.get('/home', (req, res) => {
    res.render('home')
})
app.get('/getAll', (req, res)=> {
    res.render('index', {data: arr})
})

app.get('/form', (req, res)=> {
    res.render('form')
})




let storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'public/uploads')
    },
    filename: function(req, file, cb){
        cb(null, file.originalname)
    }
})

let upload = multer({storage})

app.post('/newProduct', upload.single('thumbnail') ,(req, res)=>{
    // console.log(req.body);
    // console.log(req.file.path);
    let {name, price} = req.body
    const prod = {
        name,
        price,
        thumbnail: req.file.filename
    }
    arr.push(prod)
    console.log(arr);
    res.render('productSave')
})



app.listen(8080, ()=>{
    console.log('Server OK');
})