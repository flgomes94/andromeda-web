import styled from 'styled-components';
import { shade } from 'polished';

export const Movie = styled.main`
  width: 50%;
  height: 60%;
  background-color: #e74c3c;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  filter: drop-shadow(10px 10px 0px rgba(0, 0, 0, 0.25));
  border-radius: 10px;
  display: flex;

  img {
    border-radius: 10px;
    width: 37%;
    margin: -35px 0 35px 35px;
    filter: drop-shadow(5px 5px 0px #2c3e50);
  }

  p {
    margin-top: 10px;
    font-weight: normal;
    font-size: 14px;
    text-align: right;
    color: #34495e;
    text-transform: uppercase;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 7; /* number of lines to show */
    -webkit-box-orient: vertical;
  }
`;

export const Source = styled.div`
  width: 51%;
  height: 100%;
  margin-top: 35px;
  margin-right: 35px;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  h1 {
    font-weight: bold;
    font-size: 48px;
    margin: 0;
    background-color: ${shade(0.9, '#34495e')};
    color: transparent;
    text-shadow: 0px 1px 2px #34495e;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    text-align: right;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    -webkit-box-orient: vertical;
  }
  h2 {
    font-weight: bold;
    font-size: 16px;
    text-transform: uppercase;
    color: #34495e;
    margin-top: 10px;
    text-align: right;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    -webkit-box-orient: vertical;
  }
`;

export const Informations = styled.ul`
  display: flex;
  justify-content: flex-end;
  list-style: none;
  margin-top: 10px;
`;

export const Information = styled.li`
  font-weight: normal;
  font-size: 12px;
  color: #34495e;

  & + li {
    margin-left: 10px;
  }
`;

export const Footer = styled.div`
  margin-top: 10px;
  margin-bottom: 50px;
  margin-top: auto;
  display: flex;
  justify-content: space-around;

  svg {
    color: #2c3e50;
    cursor: pointer;
    &:hover {
      color: ${shade(0.1, '#BDC3C7')};
    }
  }
`;

export const GeneralInformation = styled.footer`
  position: absolute;
  bottom: 10px;
  display: flex;
  flex-direction: column;
  text-align: center;
  color: #ecf0f1;
  h1 {
    font-size: 12px;
  }
  a {
    font-size: 10px;
    color: #ecf0f1;
    padding: 0;
    text-decoration: none;
  }
  p {
    font-size: 10px;
    color: #ecf0f1;
    padding: 0;
    text-decoration: none;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      font-size: 10px;
      color: #ecf0f1;
      padding: 0;
      text-decoration: none;
    }
    img {
      height: 12px;
      margin-left: 5px;
    }
  }
`;
