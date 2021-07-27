import React from 'react';
import logo from '../../assets/gazin-logo.png';
import * as S from './style';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <S.Container>
      <S.LeftSide>
        <img src={logo} alt="Logo" />
      </S.LeftSide>
      <S.RightSide>
        <Link to="/">Início</Link>
        <span className="divisor"></span>
        <Link to="/dev">Cadastro</Link>
        <span className="divisor"></span>
        <a href="/#">Consulta</a>
      </S.RightSide>
    </S.Container>
  );
}

export default Header;
