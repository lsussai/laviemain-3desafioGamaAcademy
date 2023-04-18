const Pacientes = require("../database/models/pacientes")

const pacienteController = {
 // metodos para endpoints get  - serve para buscas
  async listar(req, res) {
        try{
            const listagem = await Pacientes.findAll();
            res.status(200).json(listagem);
        } catch(error) {
            console.error(error);
            res.status(500).json("Erro no Servidor");
        }
    },

    async buscarPacientes(req, res) {
        try {
          const findPaciente = await Pacientes.findByPk(req.params.id, {
            attributes: ["nome", "dataNasc", "telefone", "endereco", "email","cpf", "apresentacao"],
          });
    
          res.status(200).json(findPaciente);
        } catch (error) {
          return res.error(404).json("Id não encontrado");
        }
      },
      // metodos para POST - CRIAR
      async criarPacientes (req, res, next) {
            try {
              console.log(req.body)
              const nome = req.body["nome"];
              const telefone = req.body["telefone"];
              const email = req.body["email"];
              const cpf = req.body["cpf"];
              const apresentacao = req.body["apresentacao"];
              const dataNasc = req.body["dataNasc"];

      
              const criarUsuario = await Pacientes.create({
                "nome": nome,
                "telefone": telefone ,
                "email": email,
                "cpf": cpf,
                "apresentacao": apresentacao,
                "dataNasc": dataNasc
              });
            res.status(201).json(criarUsuario);
         } catch (error) {
            res.status(500).json({ message: 'Falha ao tentar executar!'});
         }
        
    },
     // metodos para put - atualizar
     async atualizarCadastro(req, res){
      try{
        const paciente = await Pacientes.findByPk(req.params.id);
        if (!paciente){
          return res.status(400)
        }
        const nome = req.body["nome"];
              const telefone = req.body["telefone"];
              const email = req.body["email"];
              const cpf = req.body["cpf"];
              const apresentacao = req.body["apresentacao"];
              const dataNasc = req.body["dataNasc"];
 
        const pacienteAtualizado = await Pacientes.update(
          {
            "nome": nome,
            "telefone": telefone ,
            "email": email,
            "cpf": cpf,
            "apresentacao": apresentacao,
            "dataNasc": dataNasc
          },{
            where: {"id": req.params.id}
          }
       );
       return res.status(200).json(pacienteAtualizado)

      }catch(error){
        return res.status(400).json('Erro na requisição!')
      }
    }, 
  
    // metodos para Delete - DELELTAR 
    async excluirPacientes (req, res) {
      try {
          const { id } = req.params;
          const pacientes = await Pacientes.findByPk(id);

          if (!pacientes) {
             return res.status(404).json("Id não encontrado!");
          }
 
          await Pacientes.update({ status: 0 }, { where: { id } });
 
          res.status(200).json("Excluido com Sucesso!");

       } catch (error) {
          res.status(500).json({ message: 'Erro ao Deletar', data: [] });
       }
    },
}
module.exports = pacienteController