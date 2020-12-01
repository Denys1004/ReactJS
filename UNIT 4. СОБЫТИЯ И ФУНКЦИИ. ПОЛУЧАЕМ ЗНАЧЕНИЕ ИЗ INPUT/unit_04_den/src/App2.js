import './App.css';
import React from 'react';
import { useState } from 'react';

function App() {
  // 1. Ref позволяет обратится к элементу по какомуто идентефикатору
  // 2. для начала его надо создать (не забудь импорт React) а потом присвоить(см 3) :
  let textInput = React.createRef();
  let textOut = React.createRef();

  const [output, setOutput] = useState('hello'); // указываем знячение по умолчанию (можно оставить пустые скобки)

  function showInput(event) {
    // console.log(event.target.value);
    console.log(textInput.current.value); // 4. так можно получить value 
    textOut.current.innerHTML = textInput.current.value;
    
    setOutput(textInput.current.value); //  то что вводитьс в инпут отображаем в output
  }

  return (
    <>
        <h2>Input</h2>
        {/* 3. Цепляем ref на елемент */}
        <input type="text" onInput={showInput} ref={textInput} defaultValue='hi' /> {/* можно прописать дефолтное значение*/}
        <p ref={textOut}></p>
        <h3>{output}</h3>
    </>
  );
}

export default App;
