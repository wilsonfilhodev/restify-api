const Aluno = require('../models/Aluno')

module.exports = {
    findAll(req, res) {
        Aluno.find({}).sort('name')
            .then(alunos => res.json(alunos))
            .catch(error => {
                res.status(500)
                res.json({error})
            })
    },

    findById(req, res) {
        Aluno.findById(req.params.id)
            .then(aluno => {
                if(aluno) res.json(aluno)
                else {
                    res.status(404)
                    res.json({message: 'Resource not found'})
                }
            })
            .catch(error => {
                res.status(500)
                res.json({error})
            })
    },

    create(req, res) {
        Aluno.create(req.body)
            .then(aluno => {
                res.status(201)
                res.json(aluno)
            })
            .catch(error => {
                res.status(500)
                res.json({error})
            })
    },

    async delete(req, res, next) {
        await Aluno.findByIdAndDelete(req.params.id)
            .then( () => res.status(204))
            .catch(error => {
                res.status(500)
                res.json({error})
        })
        next()
    }
    
}