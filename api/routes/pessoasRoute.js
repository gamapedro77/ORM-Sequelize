const { Router } = require("express");
const PessoaController = require("../controllers/PessoaController");

const router = Router();

router.get("/pessoas", PessoaController.listarTodas);
router.get("/pessoas/:id", PessoaController.listarPorId);

module.exports = router;
