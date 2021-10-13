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

  static async listarMatriculaPorId(req, res) {
    const { estudanteId, matriculaId } = req.params;
    try {
      const matricula = await database.Matriculas.findOne({
        where: {
          id: Number(matriculaId),
          estudante_id: Number(estudanteId),
        },
      });
      return res.status(200).json(matricula);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async criarMatricula(req, res) {
    const { estudanteId } = req.params;
    const novaMatricula = { ...req.body, estudante_id: Number(estudanteId) };
    try {
      const matriculaCriada = await database.Matriculas.create(novaMatricula);
      return res.status(201).json(matriculaCriada);
    } catch (err) {
      res.status(500).json(err.message);
    }
  }

  static async atualizarMatricula(req, res) {
    const novosDados = req.body;
    const { estudanteId, matriculaId } = req.params;
    try {
      await database.Matriculas.update(novosDados, {
        where: {
          id: Number(matriculaId),
          estudante_id: Number(estudanteId),
        },
      });
      const matriculaAtualizada = await database.Matriculas.findOne({
        where: { id: Number(matriculaId) },
      });
      return res.status(200).json(matriculaAtualizada);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async deletarMatricula(req, res) {
    const { estudanteId, matriculaId } = req.params;
    try {
      await database.Matriculas.destroy({
        where: { id: Number(matriculaId), estudante_id: Number(estudanteId) },
      });
      return res
        .status(200)
        .json({
          message: `matricula de id ${matriculaId} deletado com sucesso!`,
        });
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }
}

module.exports = PessoaController;
