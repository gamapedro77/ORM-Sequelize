const database = require("../models");

class TurmaController {
  static async listarTodas(req, res) {
    try {
      const turmas = await database.Turmas.findAll();
      return res.status(200).json(turmas);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }
  static async listarPorId(req, res) {
    const { id } = req.params;
    try {
      const turma = await database.Turmas.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(turma);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async criarTurma(req, res) {
    const novaTurma = req.body;
    try {
      const turmaCriada = await database.Turmas.create(novaTurma);
      return res.status(201).json(turmaCriada);
    } catch (err) {
      res.status(500).json(err.message);
    }
  }

  static async atualizarTurma(req, res) {
    const novosDados = req.body;
    const { id } = req.params;
    try {
      await database.Turmas.update(novosDados, { where: { id: Number(id) } });
      const turmaAtualizada = await database.Turmas.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(turmaAtualizada);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async deletarTurma(req, res) {
    const { id } = req.params;
    try {
      await database.Turmas.destroy({ where: { id: Number(id) } });
      return res
        .status(200)
        .json({ message: `turma de id ${id} deletada com sucesso!` });
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }
}

module.exports = TurmaController;
