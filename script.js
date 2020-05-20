import React from 'preact/compat';
import { h, render } from 'preact';
import styled from 'styled-components';

import './style.css';
import AutomatioLogoSrc from './assets/automatio.png';
import WireflowLogoSrc from './assets/wireflow.png';

const Container = styled.div`
  max-width: 900px;
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

const App = () => {
  return (
    <Container>
      <Prefix>Hi There, I'm</Prefix>
      <Name>Taher</Name>
      <TagLine>
        I do stuff at <VanilaLogo>Vanila</VanilaLogo>
      </TagLine>
      <p>
        I work on projects like{' '}
        <AutomatioLogo src={AutomatioLogoSrc} alt="Automatio" />{' '}
        <WireflowLogo src={WireflowLogoSrc} alt="Wireflow" />
      </p>
    </Container>
  );
};

render(<App />, document.body);
