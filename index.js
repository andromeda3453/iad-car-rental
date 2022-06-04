const express = require('express');
const app = express()
const port = 8000

app.set('view engine', 'ejs')

app.get('/', async (req,res) => {

    res.render("index")

})

app.get('/cart', async (req,res) => {

    res.render('cart')
})


app.use(express.static('./public'));
app.use(express.static('./vendors'));

app.listen(port, (err) =>{
    if(err){
        console.log("An error occured " + err);
    }else{
        console.log('Server is listening on port ' + port );
    }
})