import './App.css';
import { useEffect, useState } from 'react';
import Box from './components/Box';
import Icon from './components/Icon';

import {
  faHandBackFist,
  faHand,
  faHandScissors,
} from '@fortawesome/free-solid-svg-icons';
/* 
1. 2 boxes (title, pics, result)
2. icons(buttons) under the box (rock, scissor, paper)
3. click event (when click specific icon, change the box)
4. after user click, the other box(computer) change the icon randomly
5. compare user box with computer box
6. show the result with border color (win - green, loose - red, draw - black) 
*/

function App() {
  const [myChoice, setMyChoice] = useState('');
  const [comChoice, setComChoice] = useState('');
  const [myResult, setMyResult] = useState('');
  const [comResult, setComResult] = useState('');

  const handArray = ['scissor', 'rock', 'paper'];

  // 컴퓨터 동작 함수
  const getRandomHand = () => {
    const choice = Math.floor(Math.random() * handArray.length);
    setComChoice(() => handArray[choice]);
  };

  // 동작 선택 함수
  const handleClick = (id) => {
    setMyChoice(() => id);
    getRandomHand();
  };

  useEffect(() => {
    const compareChoice = () => {
      switch (myChoice) {
        case 'scissor':
          if (comChoice === 'paper') {
            setMyResult(() => 'WINNER');
            setComResult(() => 'LOSER');
          } else {
            setMyResult(() => 'LOSER');
            setComResult(() => 'WINNER');
          }
          break;

        case 'rock':
          if (comChoice === 'scissor') {
            setMyResult(() => 'WINNER');
            setComResult(() => 'LOSER');
          } else {
            setMyResult(() => 'LOSER');
            setComResult(() => 'WINNER');
          }

          break;
        case 'paper':
          if (comChoice === 'rock') {
            setMyResult(() => 'WINNER');
            setComResult(() => 'LOSER');
          } else {
            setMyResult(() => 'LOSER');
            setComResult(() => 'WINNER');
          }

          break;
        default:
          setMyResult(() => '');
          setComResult(() => '');
      }
    };

    // 승자 판독 함수
    const getWinner = () => {
      if (myChoice === '' || comChoice === '') {
        setMyResult(() => '');
        setComResult(() => '');
      } else if (myChoice !== comChoice) compareChoice();
      else {
        setMyResult(() => 'draw');
        setComResult(() => 'draw');
      }
    };

    getWinner();
  }, [myChoice, comChoice]);

  return (
    <div className='container'>
      <div className='box-container'>
        <Box name={`user`} hand={myChoice} result={myResult} />
        <Box name={`computer`} hand={comChoice} result={comResult} />
      </div>

      {/* icons */}
      <div className='icon-container'>
        <Icon
          id={`scissor`}
          onClick={handleClick}
          name={faHandScissors}
          size={`3x`}
        />
        <Icon
          id={`rock`}
          onClick={handleClick}
          name={faHandBackFist}
          size={`3x`}
        />
        <Icon id={`paper`} onClick={handleClick} name={faHand} size={`3x`} />
      </div>

      {/* result */}
      <div className='result'>
        <span>{myResult}</span>
      </div>
    </div>
  );
}

export default App;
