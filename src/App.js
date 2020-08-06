import React, { useState, useEffect } from 'react';

import Button from './components/Button';
import SongView from './components/SongView';
import albumData from './mockData.js';

import cover from './img/albumCover.jpg';
import PlayButtonIcon from './img/play-button.svg';
import PauseButtonIcon from './img/pause.svg';
import Heart from './img/heart.svg';
import GreyHeart from './img/greyHeart.svg';

import './App.scss';

function App() {
  const [currentSong, setCurrentSong] = useState({
    ...albumData[0],
    paused: true,
    inFavorites: false,
  });
  const [songIsOpened, setSongIsOpened] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // for more convient testing
  function resizeWindow() {
    setWindowWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', resizeWindow);
    return () => window.removeEventListener('resize', resizeWindow);
  }, []);

  return (
    <div className="playlist">
      <div className="topCover">
        <img src={cover} alt="" />
      </div>
      {albumData.map((song) => {
        const { id, title, artist } = song;
        return (
          <div
            key={id}
            className={`playlist__song ${
              currentSong?.id === id ? 'playing' : ''
            }`}
            onClick={() =>
              setCurrentSong({ ...song, paused: false, inFavorites: false })
            }
          >
            <div>
              <p className="title">{title}</p>
              <p className="artist">{artist}</p>
            </div>
          </div>
        );
      })}
      {currentSong && (
        <div className="audio">
          <Button
            type="switch"
            switchOn={currentSong.inFavorites}
            icon={GreyHeart}
            pressedIcon={Heart}
            onClick={() =>
              setCurrentSong({
                ...currentSong,
                inFavorites: !currentSong.inFavorites,
              })
            }
          />
          <div>
            <p onClick={() => setSongIsOpened(true)} className="title">
              {currentSong.title}
            </p>
          </div>
          <Button
            type="switch"
            switchOn={!currentSong?.paused}
            icon={PlayButtonIcon}
            pressedIcon={PauseButtonIcon}
            onClick={() =>
              setCurrentSong({ ...currentSong, paused: !currentSong?.paused })
            }
          />
        </div>
      )}
      {(songIsOpened || windowWidth > 700) && (
        <SongView
          {...currentSong}
          onClose={() => setSongIsOpened(false)}
          onPause={() =>
            currentSong !== null &&
            setCurrentSong({ ...currentSong, paused: !currentSong.paused })
          }
          handleFavorites={() =>
            setCurrentSong({
              ...currentSong,
              inFavorites: !currentSong.inFavorites,
            })
          }
        />
      )}
    </div>
  );
}

export default App;
