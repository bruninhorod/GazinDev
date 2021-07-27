import React, { useState, useEffect } from 'react';
import * as S from './style';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import DevCard from '../../components/DevCard';

function Home() {
  const [devs, setDevs] = useState([]);

  async function loadDev() {
    await api.get(`/dev`).then((response) => {
      setDevs(response.data);
    });
  }

  useEffect(() => {
    loadDev();
  });

  return (
    <S.Container>
      <Header />
      <Footer />

      <S.Content>
        {devs.map((dev) => (
          <Link to={`/dev/${dev._id}`}>
            <DevCard
              nome={dev.nome}
              hobby={dev.hobby}
              datanascimento={dev.datanascimento}
              idade={dev.idade}
              sexo={dev.sexo}
            />
          </Link>
        ))}
      </S.Content>
    </S.Container>
  );
}

export default Home;
