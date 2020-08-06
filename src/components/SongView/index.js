import React from 'react';
import Button from '../Button';
import BackIcon from '../../back.svg';
import ForwardIcon from '../../forward.svg';
import pressedBack from '../../pressedBack.svg';
import pressedForward from '../../fast-forward-pressed.svg';
import PlayButtonIcon from '../../play-button.svg';
import PauseButtonIcon from '../../pause.svg';
import arrow from '../../arrow.svg';
import arrowPressed from '../../arrowPressed.svg';

import Heart from '../../heart.svg';
import GreyHeart from '../../greyHeart.svg';

import './style.scss';

const SongView = ({
  onClose,
  src,
  title,
  paused,
  onPause,
  inFavorites,
  handleFavorites,
}) => {
  return (
    <div className="songView">
      <div className="topButtons">
        <Button
          icon={arrow}
          pressedIcon={arrowPressed}
          type="push"
          onClick={onClose}
        />
        <Button
          type="switch"
          switchOn={inFavorites}
          icon={GreyHeart}
          pressedIcon={Heart}
          onClick={handleFavorites}
        />
      </div>
      <img className="cover" src={src} alt="" />
      <h2>{title}</h2>
      <div className="buttons">
        <Button type="push" icon={BackIcon} pressedIcon={pressedBack} />
        <Button
          type="switch"
          switchOn={paused === false}
          icon={PlayButtonIcon}
          pressedIcon={PauseButtonIcon}
          onClick={onPause}
          size="big"
        />
        <Button type="push" icon={ForwardIcon} pressedIcon={pressedForward} />
      </div>
      <div className="duration">
        <div className="time">
          <span className="passed">1:33</span>
          <span className="fullTime">4:00</span>
        </div>
        <div className="progressBar">
          <div className="progress"></div>
        </div>
      </div>
    </div>
  );
};

export default SongView;
