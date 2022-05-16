const mongoose = require('mongoose')
const modelo = mongoose.Schema({
    data:data,
    tipo:String,
    entrega: String,
    disciplina: String,
    instrucoes:String,
    usuario:String
})

const usuarios = mongoose.model('usuarios',modelo)

module.exports = usuarios