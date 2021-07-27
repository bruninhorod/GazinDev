import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 90px;
  background: #1b4e8d;
  border-bottom: 5px solid #ff9d2e;

  display: flex;
`;

export const LeftSide = styled.div`
  width: 100%;
  height: 70 px;
  display: flex;
  align-items: center;
  padding-left: 20px;

  img {
    height: 65px;
    width: 130px;
  }
`;

export const RightSide = styled.div`
  width: 50%;
  height: 70 px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  a{
    color: #FFF;
    font-weight: bold
    text-decoration: none;
    margin: 0 10px;      
  }

  a:hover{
    color: #ff9d2e;
  }

  .divisor::after{
    content: "|";
    padding: 0 10px;
    color: #FFF;
  }
  
  display: flex;
`;
