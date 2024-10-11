import logo from './logo.svg';
import './App.css';
import Artical from './Artical';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Artical personalName="Islam" email="en.islam@gmail.com" age="23" prograph="Islam will become a softwareengenier around this time, and it will mark the beginning of her studies in Programming university." />
      <Artical personalName="Hussien" email="dr.hussien@gmail.com" age="17" prograph="Hussien will become a doctor around this time, and it will mark the beginning of her studies in medical university." />
      <Artical personalName="Ahmed" email="ahmed.hussien@gmail.com" age="17" prograph="Ahmed will become a doctor around this time, and it will mark the beginning of her studies in medical university." />
      <Artical personalName="Yassmin" email="dr.yassmin@gmail.com" age="17" prograph="Yassmien will become a doctor around this time, and it will mark the beginning of her studies in medical university." />
      </header>
    </div>
  );
}

export default App;
