const port =3003

const bodyParser =require('body-parser')
const express  = require('express')
const serve = express()
const allowCors = require('./cors')

serve.use(bodyParser.urlencoded({extended:true}))
serve.use(bodyParser.json())
serve.use(allowCors)

serve.listen(port, function(){
    console.log(`o nosso backend funciona perfeitament na porta ${port}`)
})
module.exports=serve