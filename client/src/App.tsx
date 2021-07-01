import React from 'react';
import Head from './componentsTsx/Head';
import Body from './componentsTsx/Body';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import image from './img/azul.jpeg';

const Fondo = styled.div`
  min-height: 100vh;
  max-width: 100vw;
    &::before{
        content: '';
        position: fixed;
        top: 15vh;
        width: 100vw;
        height: 100vh;
        background-repeat: repeat-y;
        background: url(${image});
        opacity: 0.9;
        z-index: -1;
    }
`;

function App() :JSX.Element {
  return (
    <div className="App">
      <Router>
        <Fondo>
          <Head/>
          <Body/>
        </Fondo>
      </Router>
    </div>
  );
}

export default App;
