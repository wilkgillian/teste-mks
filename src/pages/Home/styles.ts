import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  padding: 116px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 22px;
  list-style: none;
  /* @media (max-width: 375px){
    display: block;
  } */
  li {
    width: 217.56px;
    height: 285px;
    border-radius: 8px;
    display: flex;
    gap: 12px;
    flex-direction: column;
    overflow: hidden;
    justify-content: space-between;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.13);

    img {
      align-self: center;
      max-height: 100px;
      margin: auto;
    }
    div {
      width: 100%;
      display: flex;
      align-self: center;
      justify-content: space-between;
      padding: 0 14px;
      strong {
        height: 40px;
        overflow-y: hidden;
        font-weight: 400;
        font-size: 16px;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        white-space: pre-wrap;
        text-overflow: ellipsis;
      }
      span {
        display: flex;
        height: 26px;
        border-radius: 5px;
        background-color: #373737;
        color: #fff;
        font-weight: 700;
        padding: 4px 7px;
      }
    }

    > strong {
      padding: 0 14px;
      height: 25px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      white-space: pre-wrap;
      text-overflow: ellipsis;
      font-size: 10px;
      line-height: 12px;
      font-weight: 300;
      color: #333;
      margin-top: 5px;
    }

    button {
      width: 100%;
      height: 32px;
      background: #0F52BA;
      color: #fff;
      border: 0;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.06, '#7159c1')};
      }
      span {
        margin-left: 10px;
        text-align: center;
        font-weight: 600;
      }
    }
  }
`;
