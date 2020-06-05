import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker';

const videos = document.getElementsByTagName("video");

for(let elAt = 0; elAt <  videos.length; elAt++)
{
  const containerController = document.createElement("div");
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    containerController
  );
  videos[elAt].parentNode?.insertBefore(containerController, videos[elAt]);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
