import React, { Component } from 'react';
import './App.css';
import BoxClass from './components/BoxClass';
import IconClass from './components/IconClass';

import {
  faHandBackFist,
  faHand,
  faHandScissors,
} from '@fortawesome/free-solid-svg-icons';

const handArray = ['scissors', 'rock', 'paper'];

class AppClass extends Component {
  constructor() {
    super();
    this.state = {
      user: { name: 'user', choice: null, score: 0 },
      computer: {
        name: 'computer',
        choice: null,
        score: 0,
      },
      isUserWin: null,
      isDraw: null,
    };
  }

  // 컴퓨터 동작 함수
  getRandomHand = () => {
    const choice = Math.floor(Math.random() * handArray.length);

    return handArray[choice];
  };

  // 승패 비교함수
  compareChoice = (userChoice, computerChoice) => {
    switch (userChoice) {
      case 'scissors':
        if (computerChoice === 'paper') {
          this.setState({
            ...this.state,
            user: {
              ...this.state.user,
              choice: userChoice,
              score: this.state.user.score + 1,
            },
            computer: {
              ...this.state.computer,
              choice: computerChoice,
            },
            isUserWin: true,
            isDraw: null,
          });
        } else {
          this.setState({
            ...this.state,
            user: {
              ...this.state.user,
              choice: userChoice,
            },
            computer: {
              ...this.state.computer,
              choice: computerChoice,
              score: this.state.computer.score + 1,
            },
            isUserWin: false,
            isDraw: null,
          });
        }

        break;

      case 'rock':
        if (computerChoice === 'scissors') {
          this.setState({
            ...this.state,
            user: {
              ...this.state.user,
              choice: userChoice,
              score: this.state.user.score + 1,
            },
            computer: {
              ...this.state.computer,
              choice: computerChoice,
            },
            isUserWin: true,
            isDraw: null,
          });
        } else {
          this.setState({
            ...this.state,
            user: {
              ...this.state.user,
              choice: userChoice,
            },
            computer: {
              ...this.state.computer,
              choice: computerChoice,
              score: this.state.computer.score + 1,
            },
            isUserWin: false,
            isDraw: null,
          });
        }

        break;
      case 'paper':
        if (computerChoice === 'rock') {
          this.setState({
            ...this.state,
            user: {
              ...this.state.user,
              choice: userChoice,
              score: this.state.user.score + 1,
            },
            computer: {
              ...this.state.computer,
              choice: computerChoice,
            },
            isUserWin: true,
            isDraw: null,
          });
        } else {
          this.setState({
            ...this.state,
            user: {
              ...this.state.user,
              choice: userChoice,
            },
            computer: {
              ...this.state.computer,
              choice: computerChoice,
              score: this.state.computer.score + 1,
            },
            isUserWin: false,
            isDraw: null,
          });
        }

        break;
      default:
        this.setState({ ...this.state, isUserWin: null, isDraw: null });
    }
  };

  // 가위바위보 실행함수
  play = (userChoice) => {
    const computerChoice = this.getRandomHand();

    this.setState({
      ...this.state,
      user: { ...this.state.user, choice: userChoice },
      computer: { ...this.state.computer, choice: computerChoice },
    });

    if (!userChoice || !computerChoice) {
      this.setState({ ...this.state, isUserWin: null, isDraw: null });
    } else if (userChoice === computerChoice) {
      // draw
      this.setState({
        ...this.state,
        user: { ...this.state.user, choice: userChoice },
        computer: { ...this.state.computer, choice: computerChoice },
        isDraw: true,
      });
    } else {
      // 다른걸 선택했을 경우 , if (userChoice !== computerChoice)
      this.compareChoice(userChoice, computerChoice);
    }
  };

  // 초기화 함수
  handleReset = () => {
    this.setState({
      user: { name: 'user', choice: null, score: 0 },
      computer: {
        name: 'computer',
        choice: null,
        score: 0,
      },
      isUserWin: null,
      isDraw: null,
    });
  };

  render() {
    return (
      <div className='container'>
        <div className='reset-container'>
          {/* title */}
          <div className='title-container'>
            <span className='title'>가위! 바위! 보!</span>
          </div>

          {/* Reset Button */}
          <button onClick={() => this.handleReset()} className='reset'>
            RESET
          </button>
        </div>

        {/* Boxes */}
        <div className='box-container'>
          <BoxClass
            state={this.state.user}
            isWin={this.state.isUserWin !== null ? this.state.isUserWin : null}
            isDraw={this.state.isDraw}
          />
          <BoxClass
            state={this.state.computer}
            isWin={this.state.isUserWin !== null ? !this.state.isUserWin : null}
            isDraw={this.state.isDraw}
          />
        </div>

        {/* icons */}
        <div className='icon-container'>
          <IconClass
            id={`scissors`}
            onClick={this.play}
            name={faHandScissors}
            size={`2x`}
          />
          <IconClass
            id={`rock`}
            onClick={this.play}
            name={faHandBackFist}
            size={`2x`}
          />
          <IconClass
            id={`paper`}
            onClick={this.play}
            name={faHand}
            size={`2x`}
          />
        </div>

        {/* result */}
        <div className='result'>
          <span>
            {this.isDraw
              ? 'DRAW'
              : this.isUserWin === null
              ? null
              : this.isUserWin
              ? '😎 You WIN!'
              : '💻 Win'}
          </span>
        </div>

        {/* score */}
        <div className='score'>
          <span>{`${this.state.user.score}:${this.state.computer.score}`}</span>
        </div>
      </div>
    );
  }
}

export default AppClass;
