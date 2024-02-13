import { useState } from 'react';
import './App.css';
import ZodiacInfo from './components/ZodiacInfo';
import Stars from './components/Stars';

function App() {


  const [inputInfo, setInputInfo] = useState(null);
  const [sign, setSign] = useState(null);
  const [visible, setVisible] = useState(true);

  const clicked = () => {
    setSign(inputInfo);
    setVisible(!visible);
  }

  

 

  return (
    <div className='zodiacContainer'>
      <h1 onClick={() => setVisible(!visible)}>Your Zodiac</h1>
      <Stars />
      {visible ?
        <div className='greeting'>
          <p className='greetingQuestion'>Still don't know anything about your stars?</p>
          <p className='greetingSuggestion'>Let me help you with that!</p>
          <form>
            <p>Just enter your birthday</p>
            <input onChange={(e) => setInputInfo(e.target.value)} type='date'></input>
          </form>
          <div onClick={clicked} className='button'>
            <p>GO MAGIC</p>
          </div>
        </div>
        :
        <ZodiacInfo info={sign} />
      }
    </div>

  );
}

export default App;
