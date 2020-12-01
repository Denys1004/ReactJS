import { useState } from 'react';

function App() {
  const [anyname, setAnyname] = useState('hello'); // 1. Обьявляем хук. внутри () можно указать значение по умолчанию

  function showInput(e) {
    setAnyname(e.target.value)
  }

  return (
    <>
      <input type="text" onInput={showInput} /> 
      <div className="out">{anyname}</div>{/* 2. Прописываем хук в нужном елементе */}
    </>
  );
}

export default App;