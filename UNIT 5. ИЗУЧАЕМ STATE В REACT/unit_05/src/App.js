import './App.css';
import React from 'react';
import { useState } from 'react';


function App() {
  // Task 1
  const [st1, setSt1] = useState();
  let ref1input = React.createRef();

  function task1() {
    let currentInput = st1;
    currentInput = ref1input.current.value;
    setSt1(currentInput);
    ref1input.current.value = '';
  }

  // Task 2
  const [st2, setSt2] = useState(0);

  function task2() {
    let currentState= st2;
    currentState++;
    setSt2(currentState);
  }

  // Task 3
  const [st3, setSt3] = useState();

  function task3(e) {
    let currentInput= st3;
    currentInput = e.target.value;
    setSt3(currentInput);
  }

  // Task 4
  const [st4, setSt4] = useState(0);

  function task4() {
    let currentState = st4;
    currentState++;
    setSt4(currentState);
  }

  // Task 5
  const [st5, setSt5] = useState(0);
  let ref5 = React.createRef();

  function task5() {
    let currentState = st5;
    if(ref5.current.checked){
      currentState = ref5.current.getAttribute('currentValue');
    }else{
      currentState = 0;
    }
    setSt5(currentState);
  }

  // Task 6
  const [st6, setSt6] = useState();
  let ref6 = React.createRef();

  function task6() {
    let currentState = st6;
    currentState = ref6.current.value;
    setSt6(currentState);
  }

  // Task 7
  const [st7, setSt7] = useState();
  let ref7 = React.createRef();

  function randomInt(){
    return Math.floor(Math.random() * (0 - 255 + 1)) + 255; 
  }

  function task7() {
    let currentState = st7;
    currentState = `rgb(${randomInt()}, ${randomInt()}, ${randomInt()})`;
    setSt7(currentState);
    ref7.current.style.background = st7;
  }

  // Task 8
  const [st8, setSt8] = useState('');

  function task8(e) {
    let currentState = st8;
    if( e.charCode>47 && e.charCode<58){ // введена цыфра
      currentState += '1';
    }else{
      currentState += '0';
    }
    setSt8(currentState);
  }

  // Task 9
  const [st9, setSt9] = useState();
  function task9(e) {
    let currentState = st9;
    currentState = e.target.value;
    setSt9(currentState)
  }

  // Task 10
  const [st10, setSt10] = useState([]);
  let ref10input = React.createRef();
  let ref10output = React.createRef();
  
  function task10() {
    let currentState = st10;
    currentState.push(+ref10input.current.value);
    setSt10(currentState);
    ref10output.current.textContent = st10;
    ref10input.current.value = '';
  }

  return (
    <>
      <h1>События</h1>
      <section>
        <h2>Task 1</h2>
        <input type="text"  ref={ref1input}/>
        <button className="task-1" onClick={task1}>Push</button>
        <div>{st1}</div>
      </section>
      <section>
        <h2>Task 2</h2>
        <div className="task-2" onMouseEnter={task2}></div>
        <div>{st2}</div>
      </section>
      <section>
        <h2>Task 3</h2>
        <input type="text" className="task-3" onInput={task3}/>
        <div>{st3}</div>
      </section>
      <section>
        <h2>Task 4</h2>
        <button className="task-4" onClick={task4}>Count</button>
        <div>{st4}</div>
      </section>
      <section>
        <h2>Task 5</h2>
        <input type="checkbox" currentValue="55" onChange={task5} ref={ref5}/>
        <div>{st5}</div>
      </section>
      <section>
        <h2>Task 6</h2>
        <select className="task-6" onChange={task6}  ref={ref6}>
          <option value="7">seven</option>
          <option value="4">four</option>
          <option value="9">nine</option>
          <option value="10">ten</option>
        </select>
        <div>{st6}</div>
      </section>
      <section>
        <h2>Task 7</h2>
        <div className="block-7" ref={ref7}></div>
        <button className="task-7" onClick={task7}>Color</button>
        <div>{st7}</div>
      </section>
      <section>
        <h2>Task 8</h2>
        <input type="text" className="task-8" onKeyPress={task8}></input>
        <div>{st8}</div>
      </section>
      <section>
        <h2>Task 9</h2>
        <input type="range" className="task-9" onInput={task9}></input>
        <div>{st9}</div>
      </section>
      <section>
        <h2>Task 10</h2>
        <input type="number" className="i-10" ref={ref10input}></input>
        <button className="task-10" onClick={task10}>Push</button>
        <div ref={ref10output}>Тут выводим - форма вывода любая!</div>
      </section>
    </>
  );
}

export default App;
