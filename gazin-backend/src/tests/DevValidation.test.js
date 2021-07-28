const DevValidation = require('../middleware/DevValidation');

describe('Validação do cadastro de desenvolvedor', () => {
  test('Tem que retornar 400 se nome não estiver preenchido', async () => {
    const validation = DevValidation({
      nome: undefined,
      sexo: 'Masculino',
      idade: 15,
      datanascimento: '14-01-2000',
      hobby: 'hand',
    });
    expect(validation.statusCode).toBe(400);
    expect(validation.body.error).toBe('O nome é obrigatório');
  });

  test('Tem que retornar erro se sexo não estiver preenchido', async () => {
    const validation = DevValidation({
      nome: 'nbruno',
      sexo: undefined,
      idade: 15,
      datanascimento: '14-01-2000',
      hobby: 'hand',
    });
    expect(validation.statusCode).toBe(400);
    expect(validation.body.error).toBe('O campo sexo é obrigatório');
  });

  test('Tem que retornar erro se idade não estiver preenchida', async () => {
    const validation = DevValidation({
      nome: 'nbruno',
      sexo: 'Masculino',
      idade: undefined,
      datanascimento: '14-01-2000',
      hobby: 'hand',
    });
    expect(validation.statusCode).toBe(400);
    expect(validation.body.error).toBe('O campo idade é obrigatório');
  });

  test('Tem que retornar erro se data nascimento não estiver preenchida', async () => {
    const validation = DevValidation({
      nome: 'nbruno',
      sexo: 'Masculino',
      idade: 15,
      datanascimento: '',
      hobby: 'hand',
    });
    expect(validation.statusCode).toBe(400);
    expect(validation.body.error).toBe('O campo data nascimento é obrigatório');
  });

  test('Tem que retornar erro se data nascimento não estiver preenchida', async () => {
    const validation = DevValidation({
      nome: 'nbruno',
      sexo: 'Masculino',
      idade: 15,
      datanascimento: '14-01-2000',
      hobby: undefined,
    });
    expect(validation.statusCode).toBe(400);
    expect(validation.body.error).toBe('O campo hobby é obrigatório');
  });

  test('Tem que retornar erro se data nascimento for maior que atual', async () => {
    const validation = DevValidation({
      nome: 'nbruno',
      sexo: 'Masculino',
      idade: 15,
      datanascimento: '14/01/2022',
      hobby: 'hobby',
    });
    expect(validation.statusCode).toBe(400);
    expect(validation.body.error).toBe(
      'A data de nascimento deve ser menor que a data atual'
    );
  });
});
