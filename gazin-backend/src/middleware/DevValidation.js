const DevModel = require('../model/DevModel');

const DevValidation = (dev) => {
  const { nome, sexo, idade, hobby, datanascimento } = dev;

  const date = new Date(datanascimento.split('/').reverse().join('/'));
  const dataAtual = new Date();

  if (!nome)
    return { statusCode: 400, body: { error: 'O nome é obrigatório' } };
  if (!sexo)
    return { statusCode: 400, body: { error: 'O campo sexo é obrigatório' } };
  if (!idade)
    return { statusCode: 400, body: { error: 'O campo idade é obrigatório' } };
  if (!hobby)
    return { statusCode: 400, body: { error: 'O campo hobby é obrigatório' } };
  if (!datanascimento)
    return {
      statusCode: 400,
      body: { error: 'O campo data nascimento é obrigatório' },
    };
  if (date > dataAtual)
    return {
      statusCode: 400,
      body: { error: 'A data de nascimento deve ser menor que a data atual' },
    };
  return { statusCode: 201, body: { message: 'Usuario criado' } };
};

module.exports = DevValidation;
