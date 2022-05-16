//Importar o express
const express = require('express')
//executar o express
const app = express()
//definir a porta do servidor local
const porta = 1713

//definir a pasta dos arquivos estaticos (css, imagens, jquerry)
app.use(express.static('./assets'))
//exportar o app e a porta
module.exports={app,porta}