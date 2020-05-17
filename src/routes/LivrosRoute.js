const LivrosController = require('../controllers/LivrosController')
/** @param { import('express').Express} app */
module.exports = app => {
    const Livros = new LivrosController(app.database.index.models.livros)
    app.route('/livros')
        .get((req, res) => {
            Livros.get(req, res)
        })
        .post((req, res) => {
            Livros.create(req, res)
        })

    app.route('/livros/:id')
        .get((req, res) => {
            Livros.getById(req, res)
        })
        .put((req, res) => {
            Livros.update(req, res)
        })
        .delete((req, res) => {
            Livros.delete(req, res)
        })
}   