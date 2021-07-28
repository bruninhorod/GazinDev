import React from 'react';
import { format } from 'date-fns';
import * as S from './style';
import iconPerfil from '../../assets/icone-perfil.png';

function DevCard({ nome, hobby, datanascimento, idade, sexo }) {
  const date = format(new Date(datanascimento), 'dd/MM/yyyy');

  return (
    <S.Container>
      <S.TopCard>
        <img src={iconPerfil} alt="Foto Perfil" />
        <h3>{nome}</h3>
      </S.TopCard>
      <S.BottomCard>
        <strong>{hobby}</strong>
        <span>{date}</span>
        <span>{idade}</span>
        <span>{sexo}</span>
      </S.BottomCard>
    </S.Container>
  );
}

export default DevCard;
