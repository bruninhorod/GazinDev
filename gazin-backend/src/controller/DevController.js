const DevModel = require('../model/DevModel');
const DevValidation = require('../middleware/DevValidation');
class DevController {
  async create(req, res) {
    const dev = new DevModel(req.body);
    const response = DevValidation(req.body);

    if (response.statusCode !== 201)
      return res.status(response.statusCode).json(response.body);

    await dev
      .save()
      .then((response) => {
        return res.status(201).json(response);
      })
      .catch((error) => {
        return res.status(400).json(error);
      });
  }

  async update(req, res) {
    await DevModel.findByIdAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    })
      .then((response) => {
        return res.status(200).json(response);
      })
      .catch((error) => {
        return res.status(400).json(error);
      });
  }

  async getAll(req, res) {
    await DevModel.find({})
      .sort('nome')
      .then((response) => {
        return res.status(200).json(response);
      })
      .catch((error) => {
        return res.status(400).json(error);
      });
  }

  async getAllPaginado(req, res) {
    await DevModel.find({})
      .sort('nome')
      .limit(10)
      .then((response) => {
        return res.status(200).json(response);
      })
      .catch((error) => {
        return res.status(400).json(error);
      });
  }

  async getById(req, res) {
    await DevModel.findById(req.params.id)
      .then((response) => {
        if (response) return res.status(200).json(response);
        else
          return res
            .status(404)
            .json({ error: 'Desenvolvedor não encontrado' });
      })
      .catch((error) => {
        return res.status(500).json(error);
      });
  }

  async delete(req, res) {
    await DevModel.deleteOne({ _id: req.params.id })
      .then((response) => {
        return res.status(204).json(response);
      })
      .catch((error) => {
        return res.status(400).json(error);
      });
  }
}

module.exports = new DevController();
