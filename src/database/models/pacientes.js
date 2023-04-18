// CHAMANDO O BANCO DE DADOS
const db = require('../settings')

// IMPORTANTO OS TIPO DE SEQUELIZE
const { DataTypes } = require('sequelize')

const Pacientes = db.define('Pacientes', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    nome: {
        type: DataTypes.STRING
    },

    dataNasc: {
        type: DataTypes.STRING
    },
    telefone: {
        type: DataTypes.STRING
    },
    endereco: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    cpf: {
        type: DataTypes.STRING
    },
    apresentacao: {
        type: DataTypes.STRING
    },

    // QUANDO FOI CRIADO O CADASTRO
    createdAt: {
        type: DataTypes.DATE,
    },

    //Quando atualiza o cadastro pela ultima vez
    updatedAt: {
        type: DataTypes.DATE,
    },
    }, // REFERENCIA DE NOME DA TABELA
    {
    tableName: 'pacientes',
    }
)

// EXPORTAR O CONTEUDO CRIADO
module.exports = Pacientes