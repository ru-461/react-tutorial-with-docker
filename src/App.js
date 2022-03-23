import logo from './logo.svg';
import './App.css';

const Header = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Hello React Again</p>
      <a
        className="App-link"
        href="https://ja.reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Hello Again Docker !!
      </a>
    </header>
  )
}

const App = () => {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;