const mongoose = require('mongoose')

const AlunoSchema = new mongoose.Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true}
})

module.exports = mongoose.model('Aluno', AlunoSchema)