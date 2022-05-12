module.exports = (app)=>{
    //rota aleatoria
app.get('/',(req,res)=>{
    res.render('index.ejs')
})
}
