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

  static async criarPessoa(req, res) {
    const novaPessoa = req.body;
    try {
      const pessoaCriada = await database.Pessoas.create(novaPessoa);
      return res.status(201).json(pessoaCriada);
    } catch (err) {
      res.status(500).json(err.message);
    }
  }

  static async atualizarPessoa(req, res) {
    const novosDados = req.body;
    const { id } = req.params;
    try {
      await database.Pessoas.update(novosDados, { where: { id: Number(id) } });
      const pessoaAtualizada = await database.Pessoas.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(pessoaAtualizada);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async deletarPessoa(req, res) {
    const { id } = req.params;
    try {
      await database.Pessoas.destroy({ where: { id: Number(id) } });
      return res
        .status(200)
        .json({ message: `usuário de id ${id} deletado com sucesso!` });
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }
}

module.exports = PessoaController;
