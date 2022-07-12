import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.div`
  position: absolute;
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
  ${({ is }) =>
    is &&
    css`
      position: fixed;
      height: 100vh;
    `}
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
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 28px;
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
  padding: 0 47px;
  width: 100%;
  height: 100%;
  color: #ffffff;
  img {
    height: 100px;
  }

  strong {
    color: #333;
    display: block;
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #666;
      padding: 6px;
      width: 50px;
    }
  }

  button {
    background: none;
    border: 0;
    padding: 6px;

    svg {
      color: #7159c1;
      transition: color 0.2s;
    }

    &:hover {
      svg {
        color: ${darken(0.06, '#7159c1')};
      }
    }

    &:disabled {
      svg {
        color: ${lighten(0.25, '#7159c1')};
        cursor: not-allowed;
      }
    }
  }
`;

export const CardProducts = styled.div`
  width: 100%;
  height: 95px;
  border-radius: 8px;
`;
