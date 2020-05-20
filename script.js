import React from 'preact/compat';
import { h, render } from 'preact';
import styled from 'styled-components';

import './style.css';
import AutomatioLogoSrc from './assets/automatio.png';
import WireflowLogoSrc from './assets/wireflow.png';
import VanilaCommunitySrc from './assets/vanila-community.png';
import MyImageSrc from './assets/me.jpeg';

const BodyWrapper = styled.div`
  height: 100vh;
  margin: auto auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: auto;
  background: white;
  padding: 100px;

  p {
    font-size: 35px;
  }
`;

const ProjectLogo = styled.img`
  border-radius: 10px;
  padding: 10px;
  height: 70px;
  vertical-align: middle;
  margin-right: 10px;
`;

const AutomatioLogo = styled(ProjectLogo)`
  background: crimson;
`;

const WireflowLogo = styled(ProjectLogo)`
  background: #f1f7ff;
`;

const CommunityLogo = styled(ProjectLogo)`
  padding: 0px;
  height: 89px;
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
  font-size: 70px;
`;

const MyImage = styled.img`
  float: right;
  height: 250px;
  margin-left: 20px;
  border-radius: 10px;
`;
const App = () => {
  return (
    <BodyWrapper>
      <Container>
        <Prefix>Hi There, I'm</Prefix>
        <Name>Taher</Name>
        <MyImage src={MyImageSrc}></MyImage>
        <TagLine>
          Doing stuff at{' '}
          <VanilaLogo>
            <a href="https://vanila.io" target="_blank">
              Vanila
            </a>
          </VanilaLogo>
        </TagLine>
        <p>
          <div style={{ marginBottom: '25px' }}>
            Working on cool projects like...
          </div>
          <a href="https://automatio.co" target="_blank">
            <AutomatioLogo src={AutomatioLogoSrc} alt="Automatio" />
          </a>
          <a href="https://wireflow.co" target="_blank">
            <WireflowLogo src={WireflowLogoSrc} alt="Wireflow" />
          </a>
          <a href="https://community.vanila.io" target="_blank">
            <CommunityLogo src={VanilaCommunitySrc} />
          </a>
        </p>
      </Container>
    </BodyWrapper>
  );
};

render(<App />, document.body);
