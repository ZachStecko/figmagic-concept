import logo from './logo.svg';
import './App.css';
import Hr from './elements/Hr/Hr'
import Input from './elements/Input/Input'
import Form from './elements/Form/Form'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div style={{width: '50%'}}>
        <Input placeholder="Your Name"/>
        <Hr />
        <Form />
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
