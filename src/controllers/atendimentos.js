const Atendimentos = require("../database/models/atendimentos");
const Pacientes = require("../database/models/pacientes");
const Psicologos = require("../database/models/psicologos");

const atendimentoController = {
  async listar(req, res, next) {
    try {
      const { id } = req.params;
      const { pacientes, psicologo } = req.body;
      if (!id) {
        const listagem = await Atendimentos.findAll({
          include: [
            { model: Pacientes, attributes: { exclude: ["status"] } },
            { model: Psicologos, attributes: { exclude: ["senha", "status"] } },
          ],
        });

        res.json(listagem);
      } else {
        const { id } = req.params;
        const listar = await Atendimentos.findAll({
          
          include: [
            { model: Pacientes, attributes: { exclude: ["status"] } },
            { model: Psicologos, attributes: { exclude: ["senha", "status"] } },
          ],
        });

        return res.json(listar);
      }
    } catch {
      return res.status(500).json(`ERRO`);
    }
  },

  async cadastrarAtendimentos(req, res, next) {
    try {
      const { psicologo, paciente, agendamento, observacao } = req.body;

      if (!paciente || !agendamento || !observacao) {
        return res.status(400).json("Preencha todos os campos");
      }

      const pacienteExiste = await Pacientes.count({
        where: {
          id: paciente,
        },
      });

      if (!pacienteExiste) {
        return res.status(400).json("Paciente não encontrado");
      }

      const psicologoExiste = await Psicologos.count({
        where: {
          id: psicologo,
        },
      });
      if (!psicologoExiste) {
        return res.status(400).json("Psicologo não encontrado");
      }
      const novoAtendimento = await Atendimentos.create({
        "psicologo": psicologo,
        "paciente": paciente,
        "agendamento": agendamento,
        "observacao": observacao,
      });
      return res.status(201).json(novoAtendimento);
    } catch (error) {
      console.log(error);
      res.status(500).json("Erro interno no servidor");
    }
  },
};
module.exports = atendimentoController