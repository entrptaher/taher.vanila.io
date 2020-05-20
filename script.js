import React from 'preact/compat';
import { h, render } from 'preact';
import styled from 'styled-components';

import './style.css';
import AutomatioLogoSrc from './assets/automatio.png';
import WireflowLogoSrc from './assets/wireflow.png';
import MyImageSrc from './assets/me.jpeg';

const Container = styled.div`
  max-width: 1000px;
  margin: auto auto;
  background: white;
  height: 100vh;
  padding: 100px;

  p {
    font-size: 35px;
  }
`;

const AutomatioLogo = styled.img`
  background: crimson;
  border-radius: 10px;
  padding: 10px;
  height: 35px;
  vertical-align: middle;
`;

const WireflowLogo = styled.img`
  background: #ccc;
  border-radius: 10px;
  padding: 10px;
  height: 35px;
  vertical-align: middle;
`;

const VanilaLogo = styled.span`
  font-weight: bold;
  background: linear-gradient(to right, red 0%, crimson 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  a {
    text-decoration: none;
  }
`;

const Prefix = styled.div`
  /* font-size: 30px; */
  margin-right: 20px;
  float: left;
  color: #777;
`;

const Name = styled.span`
  font-weight: bold;
  background: linear-gradient(to right, blue 0%, red 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const TagLine = styled.div`
  color: #777;
`;

const MyImage = styled.img`
  float: right;
  height: 250px;
  /* clear: both; */
  border-radius: 10px;
`;
const App = () => {
  return (
    <Container>
      <Prefix>Hi There, I'm</Prefix>
      <Name>Taher</Name>
      <MyImage src={MyImageSrc}></MyImage>
      <TagLine>
        I do stuff at{' '}
        <VanilaLogo>
          <a href="https://vanila.io" target="_blank">
            Vanila
          </a>
        </VanilaLogo>
      </TagLine>
      <p>
        I work on projects like{' '}
        <a href="https://automatio.co" target="_blank">
          <AutomatioLogo src={AutomatioLogoSrc} alt="Automatio" />
        </a>{' '}
        <a href="https://wireflow.co" target="_blank">
          <WireflowLogo src={WireflowLogoSrc} alt="Wireflow" />
        </a>
      </p>
    </Container>
  );
};

render(<App />, document.body);
