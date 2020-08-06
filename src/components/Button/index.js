import React, { useState, useEffect } from 'react';
import './style.scss';

const Button = ({ type, switchOn, onClick, icon, pressedIcon, size }) => {
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    if (type === 'switch') setPressed(switchOn);
  }, [switchOn]);
  return (
    <div
      className={`playButton ${pressed ? 'pressed' : ''} ${
        size === 'big' ? 'big' : ''
      }`}
      onClick={onClick}
      onMouseDown={() => type === 'push' && setPressed(true)}
      onMouseUp={() => type === 'push' && setPressed(false)}
      onTouchStart={() => type === 'push' && setPressed(true)}
    >
      <img src={pressed ? pressedIcon : icon} alt="" />
    </div>
  );
};

export default Button;
