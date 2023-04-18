const Psicologos = require("../database/models/psicologos");

const psicologoController = {
  // metodos para endpoints get  - serve para buscas
  async listar(req, res) {
        try{
            const listagem = await Psicologos.findAll();
            return res.status(200).json(listagem);
        } catch(error) {
            console.error(error);
            return res.status(500).json("Erro no Servidor");
        }
    },

    async buscarPsicologo(req, res) {
        try {
          const findPsicologo = await Psicologos.findByPk(req.params.id, {
            attributes: ["nome", "telefone", "crm", "apresentacao"],
          });
    
          res.status(200).json(findPsicologo);
        } catch (error) {
          return res.error(404).json("Id não encontrado");
        }
      }, 

    // metodos post - servem para criação de novos registro

    async criar (req, res, next){
      try {
        console.log(req.body)
        const nome = req.body["nome"];
        const telefone = req.body["telefone"];
        const crm = req.body["crm"];
        const email = req.body["email"];
        const apresentacao = req.body["apresentacao"];
        const senha = req.body["senha"];

        const newRegistro = await Psicologos.create({
          "nome": nome,
          "telefone": telefone ,
          "crm": crm,
          "email": email,
          "apresentacao": apresentacao,
          "senha": senha,
        });
        return res.status(201).json(newRegistro);
      } catch(error) {
        console.error(error);
        res.status(500).json("Erro no Servidor");
    }
},
    // metodos put - servem para atualização de registro

    async atualizarCadastro(req, res){
      try{
        const psicologo = await Psicologos.findByPk(req.params.id);
        if (!psicologo){
          return res.status(400)
        }
        const nome = req.body["nome"];
        const telefone = req.body["telefone"];
        const crm = req.body["crm"];
        const email = req.body["email"];
        const apresentacao = req.body["apresentacao"]
        const senha = req.body["senha"]
 
        const psicologoAtualizado = await Psicologos.update(
          {
            "nome": nome, 
            "telefone": telefone, 
            "crm": crm, 
            "email": email, 
            "apresentacao": apresentacao, 
            "senha": senha
          },{
            where: {"id": req.params.id}
          }
       );
       return res.status(200).json(psicologoAtualizado)

      }catch(error){
        return res.status(400).json('Erro na requisição!')
      }
    },
      // metodos delete - servem para deletar 
    async excluirPsicologos(req, res) {
      try {
        const { id } = req.params;
        const psicologos = await Psicologos.findByPk(id);
        if (!psicologos) {
          return res.status(404).json("Id não encontrado!");
        }
        await Psicologos.update({ status: 0 }, { where: { id } });
        return res.status(200).json("Excluido com Sucesso!");
      } catch (error) {
        return res.status(500).json('Erro ao Deletar');
      }
    }
}
module.exports = psicologoController