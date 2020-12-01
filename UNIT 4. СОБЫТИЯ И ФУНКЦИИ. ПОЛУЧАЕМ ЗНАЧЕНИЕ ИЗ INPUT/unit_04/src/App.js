import './App.css';
import React from 'react';
import { useState } from 'react';


function App() {
  let count4 = 0;

  function task1() {
    console.log('task2');
  }

  function task2(e) {
    let div2 = e.target;
    if(!div2.classList.contains('active')){
      div2.className += ' active';
    }
  }

  function task3(e) {
    console.log(e.target.value);
  }
  function task4() {
    count4++;
    console.log(count4);
  }

  const [output, setOutput] = useState();
  function task5(e) {
    if(e.target.checked){
      setOutput(e.target.value);
    }else{
      setOutput(0);
    }
  }

  let ref6 = React.createRef();
  const [output6, setOutput6] = useState();
  function task6() {
    setOutput6(ref6.current.value);
  }

  let ref7 = React.createRef();
  function randomInt(){
      return Math.floor(Math.random() * (0 - 255 + 1)) + 255; 
  }
  function task7() {
    let randColor = `rgb(${randomInt()}, ${randomInt()}, ${randomInt()})`
    ref7.current.style.background = randColor;
  }

  let ref8input = React.createRef();
  let ref8output = React.createRef();
  function task8(e) {
    if( e.charCode>47 && e.charCode<58){ // введена цыфра
      ref8output.current.textContent += '1';
    }else{
      ref8output.current.textContent += '0';
    }
  }

  let ref9input = React.createRef();
  let ref9output = React.createRef();
  function task9() {
    ref9output.current.textContent = ref9input.current.value;
  }


  let ar10 = [5, 6, 7];
  let ref10input = React.createRef();
  function task10() {
    let val = +ref10input.current.value
    ref10input.current.value = '';
    ar10.push(val)
    console.log(ar10);
  }

  return (
    <>
      <h1>События</h1>
      <section>
        <h2>Task 1</h2>
        <button className="task-1" onClick={task1}>Push</button>
      </section>
      <section>
        <h2>Task 2</h2>
        <div className="task-2" onMouseEnter={task2}></div>
      </section>
      <section>
        <h2>Task 3</h2>
        <input type="text" className="task-3" onInput={task3}/>
      </section>
      <section>
        <h2>Task 4</h2>
        <button className="task-4" onClick={task4}>Count</button>
      </section>
      <section>
        <h2>Task 5</h2>
        <input type="checkbox" currentValue="55" onChange={task5} />
        <div className="out-5">{output}</div>
      </section>
      <section>
        <h2>Task 6</h2>
        <select className="task-6" onChange={task6} ref={ref6}>
          <option value="7">seven</option>
          <option value="4">four</option>
          <option value="9">nine</option>
          <option value="10">ten</option>
        </select>
        <div className="out-6">{output6}</div>
      </section>
      <section>
        <h2>Task 7</h2>
        <div className="block-7" ref={ref7}></div>
        <button className="task-7" onClick={task7}>Color</button>
      </section>
      <section>
        <h2>Task 8</h2>
        <input type="text" className="task-8" onKeyPress={task8} ref={ref8input}></input>
        <div className="out-8" ref={ref8output}></div>
      </section>
      <section>
        <h2>Task 9</h2>
        <input type="range" className="task-9" onInput={task9} ref={ref9input}></input>
        <div className="out-9" ref={ref9output}></div>
      </section>
      <section>
        <h2>Task 10</h2>
        <input type="number" className="i-10" ref={ref10input}></input>
        <button className="task-10" onClick={task10}>Push</button>
      </section>
    </>
  );
}

export default App;
