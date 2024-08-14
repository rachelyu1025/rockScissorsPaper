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
  const [user, setUser] = useState({
    name: 'user',
    choice: null,
    score: 0,
  });

  const [computer, setComputer] = useState({
    name: 'computer',
    choice: null,
    score: 0,
  });

  const [isUserWin, setIsUserWin] = useState(null);
  const [isDraw, setIsDraw] = useState(null);

  const handArray = ['scissors', 'rock', 'paper'];

  // 컴퓨터 동작 함수
  const getRandomHand = () => {
    const choice = Math.floor(Math.random() * handArray.length);

    return handArray[choice];
  };

  // 승패 비교함수
  const compareChoice = (userChoice, computerChoice) => {
    if (isDraw) setIsDraw(false);

    switch (userChoice) {
      case 'scissors':
        if (computerChoice === 'paper') {
          setIsUserWin((prev) => true);

          const prevScore = user.score;
          setUser((prev) => ({ ...prev, score: prevScore + 1 }));
        } else {
          setIsUserWin((prev) => false);
          const prevScore = computer.score;
          setComputer((prev) => ({ ...prev, score: prevScore + 1 }));
        }

        break;

      case 'rock':
        if (computerChoice === 'scissors') {
          setIsUserWin((prev) => true);

          const prevScore = user.score;
          setUser((prev) => ({ ...prev, score: prevScore + 1 }));
        } else {
          setIsUserWin((prev) => false);
          const prevScore = computer.score;
          setComputer((prev) => ({ ...prev, score: prevScore + 1 }));
        }

        break;
      case 'paper':
        if (computerChoice === 'rock') {
          setIsUserWin((prev) => true);

          const prevScore = user.score;
          setUser((prev) => ({ ...prev, score: prevScore + 1 }));
        } else {
          setIsUserWin((prev) => false);
          const prevScore = computer.score;
          setComputer((prev) => ({ ...prev, score: prevScore + 1 }));
        }

        break;
      default:
        setIsUserWin(null);
    }
  };

  // onClick 실행함수
  const play = (userChoice) => {
    setUser((prev) => ({ ...prev, choice: userChoice }));

    const computerChoice = getRandomHand();
    setComputer((prev) => ({ ...prev, choice: computerChoice }));

    if (!userChoice || !computerChoice) {
      setIsUserWin((prev) => null);
      setIsDraw((prev) => null);
    } else if (userChoice !== computerChoice)
      compareChoice(userChoice, computerChoice);
    else {
      setIsDraw(true);
    }
  };

  return (
    <div className='container'>
      {/* title */}
      <div className='title-container'>
        <span className='title'>가위! 바위! 보!</span>
      </div>

      {/* Boxes */}
      <div className='box-container'>
        <Box state={user} isWin={isUserWin} isDraw={isDraw} />
        <Box state={computer} isWin={!isUserWin} isDraw={isDraw} />
      </div>

      {/* icons */}
      <div className='icon-container'>
        <Icon
          id={`scissors`}
          onClick={play}
          name={faHandScissors}
          size={`2x`}
        />
        <Icon id={`rock`} onClick={play} name={faHandBackFist} size={`2x`} />
        <Icon id={`paper`} onClick={play} name={faHand} size={`2x`} />
      </div>

      {/* result */}
      <div className='result'>
        <span>
          {isDraw
            ? 'DRAW'
            : isUserWin === null
            ? null
            : isUserWin
            ? '😎 You WIN!'
            : '💻 Win'}
        </span>
      </div>

      {/* score */}
      <div className='score'>
        <span>{`${user.score}:${computer.score}`}</span>
      </div>
    </div>
  );
}

export default App;
