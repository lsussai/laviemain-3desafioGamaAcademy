// CHAMANDO O BANCO DE DADOS
const db = require('../settings');

// IMPORTANTO OS TIPO DE SEQUELIZE
const { DataTypes } = require('sequelize');

const Psicologos =db.define('Psicologos', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        nome: {
            type: DataTypes.STRING
        },

        telefone: {
            type: DataTypes.STRING
        },
        crm: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        apresentacao: {
            type: DataTypes.STRING
        },
        senha: {
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
    },     // REFERENCIA DE NOME DA TABELA
    {
        modelName: 'psicologos',
    }
)

// EXPORTAR O CONTEUDO CRIADO
module.exports = Psicologos