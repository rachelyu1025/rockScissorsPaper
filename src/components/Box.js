import React from 'react';

const Box = (props) => {
  const { state, isDraw, isWin } = props;
  const { name, choice } = state;

  return (
    <div
      className={`box ${
        !choice || isWin === null
          ? ''
          : isDraw
          ? 'draw'
          : isWin
          ? 'win'
          : 'lose'
      }`}
    >
      <span>{name}</span>

      <img
        className='image'
        src={`/images/${choice ? choice : 'draw'}.jpeg`}
        alt=''
      />

      <span>
        {isDraw
          ? 'DRAW'
          : !choice || isWin === null
          ? null
          : isWin
          ? 'WIN'
          : 'LOSE'}
      </span>
    </div>
  );
};

export default Box;
