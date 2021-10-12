const database = require("../models");

class PessoaController {
  // CRUD = (C)reate (R)ead (U)pdate (D)elete
  static async listarTodas(req, res) {
    try {
      const listaPessoas = await database.Pessoas.findAll();
      return res.status(200).json(listaPessoas);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async listarPorId(req, res) {
    const { id } = req.params;
    try {
      const pessoa = await database.Pessoas.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(pessoa);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }
}

module.exports = PessoaController;
