const database = require("../models");

class NivelController {
  static async listarTodos(req, res) {
    try {
      const niveis = await database.Niveis.findAll();
      return res.status(200).json(niveis);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async listarPorId(req, res) {
    const { id } = req.params;
    try {
      const nivel = await database.Niveis.findOne({
        where: { id: Number(id) },
      });
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async criarNivel(req, res) {
    const novoNivel = req.body;
    try {
      const nivelCriado = await database.Niveis.create(novoNivel);
      return res.status(201).json(nivelCriado);
    } catch (err) {
      res.status(500).json(err.message);
    }
  }

  static async atualizarNivel(req, res) {
    const novosDados = req.body;
    const { id } = req.params;
    try {
      await database.Niveis.update(novosDados, { where: { id: Number(id) } });
      const nivelAtualizado = await database.Niveis.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(nivelAtualizado);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async deletarNivel(req, res) {
    const { id } = req.params;
    try {
      await database.Niveis.destroy({ where: { id: Number(id) } });
      return res
        .status(200)
        .json({ message: `nivel de id ${id} deletado com sucesso!` });
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }
}

module.exports = NivelController;
