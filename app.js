const express = require('express')
const app = express();
const usuario=[
    {nome:'carlos', idade:'20',peso:'100'},
    {nome:'pedro', idade:'30'},
    {nome: 'joao', idade: '18', peso: '75', cep: '77807060'},
]
app.use("/",(req, res, next)=>{
    res.send(usuario)
})
app.use("/nome",(req, res, next)=>{
    res.send(usuario[1].nome)
})
app.use("/soma",(req, res, next)=>{
    res.send(usuario[].idade)
})

module.exports = app