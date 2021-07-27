import styled from 'styled-components';

export const Container = styled.div`
  width: 400px;
  height: 250px;
  background-color: #1b4e8d;
  border-radius: 15px 15px 15px 15px;
  transition: box-shadow 0.3s;
  float: left;

  img {
    width: 100px;
    height: 70px;
  }

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.5;
    box-shadow: 10px 10px 5px 0px rgba(255, 157, 46, 1);
  }

  margin: 8px;
`;

export const TopCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const BottomCard = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`;
