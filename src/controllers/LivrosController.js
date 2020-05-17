const BaseController = require('./BaseController')

module.exports = class LivrosController extends BaseController {
    get(req, res) {
        this.model.findAll()
            .then(result => {
                res.status(200).send(result)
            })
            .catch(error => {
                res.status(400).send(error)
            })
    }

    getById(req, res) {
        this.model.findAll({
            where: {
                id: req.params.id
            }
        })
            .then(result => {
                res.status(200).send(result)
            })
            .catch(error => {
                res.status(400).send(error)
            })
    }

    create(req, res) {
        this.model.create(req.body)
            .then(result => {
                res.status(200).send({ message: "Registro criado com sucesso" })
            })
            .catch(error => {
                res.status(400).send(error)
            })
    }

    update(req, res) {
        this.model.update(req.body, { where: { id: req.params.id } })
            .then(result => {
                res.status(200).send({ message: "Registro atualizado com sucesso." })
            })
            .catch(error => {
                res.status(400).send(error)
            })
    }

    delete(req, res) {
        this.model.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(result => {
                res.status(200).send({ message: "Registro excluído com sucesso" })
            })
            .catch(error => {
                res.status(400).send(error)
            })
    }
}