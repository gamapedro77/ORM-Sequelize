const { Router } = require("express");
const PessoaController = require("../controllers/PessoaController");

const router = Router();

router
  .get("/pessoas", PessoaController.listarTodas)
  .get("/pessoas/:id", PessoaController.listarPorId)
  .post("/pessoas", PessoaController.criarPessoa)
  .put("/pessoas/:id", PessoaController.atualizarPessoa)
  .delete("/pessoas/:id", PessoaController.deletarPessoa)
  .get(
    "/pessoas/:estudanteId/matricula/:matriculaId",
    PessoaController.listarMatriculaPorId
  )
  .post("/pessoas/:estudanteId/matricula", PessoaController.criarMatricula)
  .put(
    "/pessoas/:estudanteId/matricula/:matriculaId",
    PessoaController.atualizarMatricula
  )
  .delete(
    "/pessoas/:estudanteId/matricula/:matriculaId",
    PessoaController.deletarMatricula
  );

module.exports = router;
