const { Router } = require("express");
const NivelController = require("../controllers/NivelController");

const router = Router();

router
  .get("/niveis", NivelController.listarTodos)
  .get("/niveis/:id", NivelController.listarPorId)
  .post("/niveis", NivelController.criarNivel)
  .put("/niveis/:id", NivelController.atualizarNivel)
  .delete("/niveis/:id", NivelController.deletarNivel);

module.exports = router;
