import logo from './logo.svg';
import './App.css';

let text = "test variable";
const style = {
  fontSize: '24px',
  fontStyle : 'italic',
  color: 'red'
}
function App() {
  let text2 = '222';
  return (
    <>
      <div className = "container">
        <h1 style={style}>app_1</h1>
        <img src="/images/2.jpg" alt="2"/>
        <ul>
          <li>Hello</li>
          <li>{text + text2}</li>
        </ul>
      </div>
    </>
  );
}



export default App;
