//importar o mongoose
const mongoose = require('mongoose')
const conn = async()=>{
    const atlas = await mongoose.connect('mongodb+srv://<username>:<pasquini44>@cluster0.bvp72.mongodb.net/dblr ')

}

module.exports = conn