// CHAMANDO O BANCO DE DADOS
const db = require("../settings")

// IMPORTANTO OS TIPO DE SEQUELIZE
const { DataTypes } = require("sequelize")

const Pacientes = require("../models/pacientes"); 
const Psicologos = require("../models/psicologos"); 



const Atendimentos =db.define("Pacientes", {
       id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    observacao: {
        type: DataTypes.STRING
    },
 
    agendamento: {
        type: DataTypes.DATE
    },

    psicologo: {
        type: DataTypes.INTEGER,
        references:{
            model: Psicologos,
            key: "id",
        }
    },

    paciente: {
        type: DataTypes.INTEGER,
        references:{
            model: Pacientes,
            key: "id",
        }
    }, 
    // QUANDO FOI CRIADO O CADASTRO
    createdAt: {
        type: DataTypes.DATE,
    },

    //Quando atualiza o cadastro pela ultima vez
    updatedAt: {
        type: DataTypes.DATE,
    },
},  // REFERENCIA DE NOME DA TABELA
    {
        tableName: "pacientes",
    }
)

// EXPORTAR O CONTEUDO CRIADO
module.export = Atendimentos