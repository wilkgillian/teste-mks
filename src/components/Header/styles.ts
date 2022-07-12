import styled from 'styled-components';

export const Container = styled.header`
position: fixed;
width: 100%;
max-width: 1440px;
margin: auto;
  height: 101px;
  background-color: #0f52ba;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 28px 65px;

  a {
    display: flex;
    align-items: baseline;
    text-decoration: none;
    color: #fff;
    transition: opacity 0.2s;
    h1 {
      font-weight: 600;
      font-size: 40px;
    }
    h2 {
      margin-left: 10px;
      font-weight: 300;
      font-size: 20px;
    }

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const Car = styled.div`

  button {
    border: none;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 90px;
    height: 45px;
    border-radius: 8px;
    background-color: #fff;
    color: #000000;
    text-align: right;
    span {
      font-weight: 700;
      font-size: 18px;
    }
  }
`;
