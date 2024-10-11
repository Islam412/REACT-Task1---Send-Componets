import logo from './logo.svg';
import './App.css';
import Artical from './Artical';


function App() {
  const fristArtical = 'I am Islam Hamdy from Cairo'
  const secondArtical = 'I am Sandy from Cairo'
  const thirdArtical = 'I am Khoulod from Cairo'
  return (
    <div className="App">
      <header className="App-header">
      <Artical personalName="Islam" email="en.islam@gmail.com" age="23" content="Islam will become a softwareengenier around this time, and it will mark the beginning of her studies in Programming university." />
      <Artical personalName="Hussien" email="dr.hussien@gmail.com" age="17" content="Hussien will become a doctor around this time, and it will mark the beginning of her studies in medical university." />
      <Artical personalName="Ahmed" email="ahmed.hussien@gmail.com" age="17" content="Ahmed will become a doctor around this time, and it will mark the beginning of her studies in medical university." />
      <Artical personalName="Yassmin" email="dr.yassmin@gmail.com" age="17" content="Yassmien will become a doctor around this time, and it will mark the beginning of her studies in medical university." />

      <Artical personalName="Mahmoud" email="mahmoud@gmail.com" age="17" content= {fristArtical} />
      <Artical personalName="Sandy" email="sandy@gmail.com" age="17" content= {secondArtical} />
      <Artical personalName="Khoulod" email="khoulod@gmail.com" age="17" content= {thirdArtical} />
      </header>
    </div>
  );
}

export default App;
