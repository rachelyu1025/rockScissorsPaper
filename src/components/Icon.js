import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = (props) => {
  const { id, onClick, name, size } = props;
  return (
    <div onClick={() => onClick(id)}>
      <FontAwesomeIcon className='icon' icon={name} size={size} />
    </div>
  );
};

export default Icon;
