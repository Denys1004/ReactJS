import './App.css';
import React, { useState } from 'react';
import Test2 from './Test2';

function App() {
  const refC = React.createRef();
  let f1=()=>{
    refC.current.go();
  }

  return (
    <div>
      <Test2 ref={refC}/>
      <button onClick={f1}>Push</button>
    </div>
  );
}

export default App;
