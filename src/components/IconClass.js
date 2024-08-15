import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class IconClass extends Component {
  render() {
    const { id, onClick, name, size } = this.props;
    return (
      <div onClick={() => onClick(id)}>
        <FontAwesomeIcon className='icon' icon={name} size={size} />
      </div>
    );
  }
}

export default IconClass;
