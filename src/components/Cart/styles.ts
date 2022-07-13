import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  max-width: 1440px;
  display: flex;
  justify-content: flex-end;
`;
export const Content = styled.div`
  background: #0f52ba;
  width: 486px;
  height: 100vh;
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
  overflow: auto;
  div {
    padding: 47px;
    display: flex;
    justify-content: space-between;
    h1 {
      color: #fff;
    }
    button {
      width: 38px;
      height: 38px;
      border-radius: 50%;
      border: none;
      color: #fff;
      font-size: 28px;
      background-color: #000000;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  footer {
    width: 100%;
    max-width: 486px;
    position: fixed;
    bottom: 0;
    div {
      width: 100%;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 28px;
      background-color: #0f52ba;
      color: #fff;
      font-weight: 700;
    }

    button {
      width: 100%;
      height: 97px;
      background: #000000;
      color: #fff;
      border: none;
      font-weight: bold;
      font-size: 28px;
      font-weight: 700;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.06, '#7159c1')};
      }
    }
  }
`;

export const ProductList = styled.div`
  width: 100%;
  height: 101px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 28px;
`;
export const CartItem = styled.article`
  height: 95px;
  width: 379px;
  border-radius: 8px;
  background-color: #fff;
  padding: 19px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  img {
    height: 100%;
  }
  strong {
    margin-left: 10px;
    font-weight: 400;
    width: 10%;
    font-size: 13px;
    color: #2c2c2c;
  }
  div {
    width: 30%;
    display: inline-block;
    span {
      margin-left: -50px;
      margin: auto;
      height: 19px;
      width: 50px;
      border: 0.3px solid #bfbfbf;
      border-radius: 4px;
      display: flex;
      align-items: center;
      overflow: hidden;
      input {
        width: 60%;
        text-align: center;
        border-left: 0.3px solid #bfbfbf;
        border-right: 0.3px solid #bfbfbf;
        border-top: 0;
        border-bottom: 0;
      }
      button {
        background-color: #fff;
        color: #000;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0;
        font-size: 12px;
      }
    }
  }
  span {
    font-size: 14px;
    font-weight: 700;
    color: #000;
    margin-right: 20px;
  }
  > svg {
    margin-top: -90px;
    position: absolute;
    margin-left: 350px;
    background-color: #000000;
    color: #fff;
    border-radius: 50%;
    height: 18px;
    width: 18px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
  }
`;
