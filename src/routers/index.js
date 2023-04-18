const express = require('express');
const psicologoController = require('../controllers/psicologos');
const pacienteController = require('../controllers/pacientes');

const router = express.Router();

router.post('/login', (req,res) => {
    return res.json('TESTElogin')
});

router.get('/psicologos', psicologoController.listar);
router.get('/psicologos/:id', psicologoController.buscarPsicologo);
router.post('/psicologos', async (req, res, next) => {
    console.log(req.body)
    psicologoController.criar(req, res, next)
});
router.put('/psicologos/:id', psicologoController.criar);
router.delete('/psicologos/:id', psicologoController.excluirPsicologos);

router.get('/pacientes', pacienteController.listar);
router.get('/pacientes/:id', pacienteController.buscarPacientes);
router.post('/paciente', async (req, res, next) => {
    console.log(req.body)
    pacienteController.criarPacientes(req, res, next)
});
router.put('/pacientes/:id', pacienteController.criarPacientes);
router.delete('/pacientes/:id', pacienteController.excluirPacientes);

router.get('/atendimentos', atendimentoController.listar);
router.get('/atendimentos/:id', atendimentoController.cadastrarAtendimento);
router.post('atendimentos', async (req, res, next) => {
    console.log(req.body)
    atendimentoController.cadastrarAtendimento(req, res, next)
});
module.exports = router