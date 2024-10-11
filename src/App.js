import logo from './logo.svg';
import './App.css';
import Artical from './Artical';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Artical name='Ahmed'  email='u5iXK@example.com'  age='25' />
        <Artical />
        <Artical />
      </header>
    </div>
  );
}

export default App;
