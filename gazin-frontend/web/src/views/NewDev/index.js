import React, { useState, useEffect } from 'react';
import * as S from './style';
import api from '../../services/api';
import { Redirect } from 'react-router-dom';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

function NewDev({ match }) {
  const [redirect, setRedirect] = useState(false);
  const [id, setId] = useState();
  const [nome, setNome] = useState();
  const [hobby, setHobby] = useState();
  const [datanascimento, setData] = useState();
  const [idade, setIdade] = useState();
  const [sexo, setSexo] = useState();

  async function loadTaskDetail() {
    await api.get(`/dev/${match.params.id}`).then((response) => {
      setNome(response.data.nome);
      setHobby(response.data.hobby);
      setData(response.data.datanascimento);
      setIdade(response.data.idade);
      setSexo(response.data.sexo);
    });
  }

  async function remove() {
    const res = window.confirm('Tem certeza que deseja excluir esse dev?');
    if (res == true) {
      await api.delete(`/dev/${match.params.id}`).then(() => setRedirect(true));
    } else {
      alert('Cadastro mantido.');
    }
  }

  async function Save() {
    if (!nome) return alert('Você precisa informar o nome do desenvolvedor');
    else if (!hobby) return alert('Você precisa informar um hobby');
    else if (!datanascimento)
      return alert('Você precisa informar uma data de nascimentp');
    else if (!idade) return alert('Você precisa informar uma idade');
    else if (!sexo) return alert('Você precisa informar o sexo');

    if (match.params.id) {
      await api
        .put(`/dev/${match.params.id}`, {
          nome,
          hobby,
          datanascimento,
          idade,
          sexo,
        })
        .then(() => setRedirect(true));
    } else {
      await api
        .post('/dev', {
          nome,
          hobby,
          datanascimento,
          idade,
          sexo,
        })
        .then(() => setRedirect(true));
    }
  }

  useEffect(() => {
    loadTaskDetail();
  }, []);

  return (
    <S.Container>
      {redirect && <Redirect to="/" />}
      <Header />
      <Footer />

      <S.Form>
        <S.Input>
          <span>Nome do desenvolvedor: </span>
          <input
            type="text"
            placeholder="Ex: João Silva..."
            onChange={(e) => setNome(e.target.value)}
            value={nome}
          ></input>
        </S.Input>
        <S.Input>
          <span>Hobby: </span>
          <input
            type="text"
            placeholder="Ex: Jogar handebol"
            onChange={(e) => setHobby(e.target.value)}
            value={hobby}
          ></input>
        </S.Input>
        <S.Input>
          <span>Data de nascimento: </span>
          <input
            type="date"
            placeholder="DD/MM/YYYY"
            onChange={(e) => setData(e.target.value)}
            value={datanascimento}
          ></input>
        </S.Input>
        <S.Input>
          <span>Idade: </span>
          <input
            type="text"
            placeholder="Idade"
            onChange={(e) => setIdade(e.target.value)}
            value={idade}
          ></input>
        </S.Input>
        <S.Input>
          <span>Sexo: </span>
          <input
            type="text"
            placeholder="Ex:Masculino, feminino, entre outros."
            onChange={(e) => setSexo(e.target.value)}
            value={sexo}
          ></input>
        </S.Input>

        <S.Options>
          {match.params.id && (
            <button type="button" onClick={remove}>
              Excluir
            </button>
          )}
        </S.Options>

        <S.Save>
          <button type="button" onClick={Save}>
            Salvar
          </button>
        </S.Save>
      </S.Form>
    </S.Container>
  );
}

export default NewDev;
