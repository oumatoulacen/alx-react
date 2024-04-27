import './App.css';
import logo from './holberton_logo.jpg';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt='logo' />
        <h1>School dashboard</h1>
      </header>
      <body className='App-body'>
        <p>Login to access the full dashboard</p>
      </body>
      <footer className='App-footer'>Copyright {getFullYear()} - {getFooterCopy(true)}</footer>
    </div>
  );
}

export default App;
