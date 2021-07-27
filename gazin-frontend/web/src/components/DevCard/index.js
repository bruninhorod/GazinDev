import React from 'react';
import * as S from './style';
import iconPerfil from '../../assets/icone-perfil.png';

function DevCard({ nome, hobby, datanascimento, idade, sexo }) {
  return (
    <S.Container>
      <S.TopCard>
        <img src={iconPerfil} alt="Foto Perfil" />
        <h3>{nome}</h3>
      </S.TopCard>
      <S.BottomCard>
        <strong>{hobby}</strong>
        <span>{datanascimento}</span>
        <span>{idade}</span>
        <span>{sexo}</span>
      </S.BottomCard>
    </S.Container>
  );
}

export default DevCard;
