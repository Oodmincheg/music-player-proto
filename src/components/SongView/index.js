import React from 'react';
import Button from '../Button';

import BackIcon from '../../img/back.svg';
import ForwardIcon from '../../img/forward.svg';
import pressedBack from '../../img/pressedBack.svg';
import pressedForward from '../../img/fast-forward-pressed.svg';
import PlayButtonIcon from '../../img/play-button.svg';
import PauseButtonIcon from '../../img/pause.svg';
import arrow from '../../img/arrow.svg';
import arrowPressed from '../../img/arrowPressed.svg';
import Heart from '../../img/heart.svg';
import GreyHeart from '../../img/greyHeart.svg';

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
