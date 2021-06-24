import React from 'react';
import Home from './components/Home';
import InputPassword from './components/InputPassword';
import InfoGeneral from './components/InformationGeneral/InfoGeneral';

function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      <InputPassword/>
      <br/><hr/>
      <InfoGeneral/>
    </div>
  );
}

export default App;
