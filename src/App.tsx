import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import IconButton from '@material-ui/core/IconButton';
import Replay10 from '@material-ui/icons/Replay10';
import AddCircle from '@material-ui/icons/AddCircle';
import RemoveCircle from '@material-ui/icons/RemoveCircle';
import Forward10 from '@material-ui/icons/Forward10';

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

  return (
    <div className="CideoController" ref={refCiderController}>
      <IconButton onClick={() => setmoveTimeLine(-10)}><Replay10 /></IconButton>
      <IconButton onClick={() => setPlayBackRate(p => p + 0.1)}><AddCircle /></IconButton>      
      <IconButton onClick={() => setPlayBackRate(p => p - 0.1 > 0.1 ? p - 0.1 : 0.1)}><RemoveCircle /></IconButton>
      <IconButton onClick={() => setmoveTimeLine(10)}><Forward10 /></IconButton>
      <span>{playBackRate.toFixed(1)}x</span>
    </div>
  );
}

export default App;
