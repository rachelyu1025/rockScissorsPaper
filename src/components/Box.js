import React from 'react';

const Box = (props) => {
  const { name, hand, result } = props;

  return (
    <div className={`box ${result}`}>
      <span>{name}</span>

      <img
        className='image'
        src={`/images/${hand ? hand : 'draw'}.jpeg`}
        alt=''
      />
      <span>{result}</span>
    </div>
  );
};

export default Box;
