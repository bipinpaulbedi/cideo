import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import IconButton from '@material-ui/core/IconButton';
import Replay10 from '@material-ui/icons/Replay10';
import AddCircle from '@material-ui/icons/AddCircle';
import RemoveCircle from '@material-ui/icons/RemoveCircle';
import Forward10 from '@material-ui/icons/Forward10';
import ClearAll from '@material-ui/icons/ClearAll';

function App() {
  let [playBackRate, setPlayBackRate] = useState(1.0)
  let [moveTimeLine, setmoveTimeLine] = useState(0)
  let refCiderController = useRef(null)

  useEffect(() => {
    const controlledVideo = refCiderController.current;
    if (controlledVideo != null) {
      const videoElement: HTMLVideoElement = controlledVideo["parentElement"]["nextElementSibling"] as HTMLVideoElement;
      moveTimeLine !== 0 && (videoElement.currentTime += moveTimeLine) && setmoveTimeLine(0);
      videoElement.playbackRate !== playBackRate && (videoElement.playbackRate = playBackRate);
    }
  }, [playBackRate, moveTimeLine]);

  useEffect(() => {
    const handleKeyPress = (e: any) => {
        switch(e.keyCode){
          case 83:
          case 115:
            setPlayBackRate(p => p - 0.1 > 0.1 ? p - 0.1 : 0.1);
            break;
          case 68:
          case 100:
            setPlayBackRate(p => p + 0.1);
            break;
          case 82:
          case 114:
            setPlayBackRate(1);
            break;
          case 90:
          case 112:
            setmoveTimeLine(-10);
            break;
          case 88:
          case 120:
            setmoveTimeLine(10);
        } 
    };
    window.addEventListener('keydown', handleKeyPress);

    return () => {
        window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div className="CideoController" ref={refCiderController}>
      <IconButton onClick={(e) => {e.preventDefault(); setmoveTimeLine(-10)}}><Replay10 /></IconButton>
      <IconButton onClick={(e) => {e.preventDefault();setPlayBackRate(p => p + 0.1)}}><AddCircle /></IconButton>      
      <IconButton onClick={(e) => {e.preventDefault();setPlayBackRate(1)}}><ClearAll /></IconButton>      
      <IconButton onClick={(e) => {e.preventDefault();setPlayBackRate(p => p - 0.1 > 0.1 ? p - 0.1 : 0.1)}}><RemoveCircle /></IconButton>
      <IconButton onClick={(e) => {e.preventDefault();setmoveTimeLine(10)}}><Forward10 /></IconButton>
    </div>
  );
}

export default App;
