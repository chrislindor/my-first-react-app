import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import App2 from './App2.js';
import ColorPicker from './Slider.js';
import HighOrder from './HighOrder.js';
import FlexComponent from './FlexComponent.js';

ReactDOM.render(
  <div>
    <App />
    <App2 />
    <ColorPicker />
    <HighOrder />
    <FlexComponent />
  </div>

  , document.getElementById('app'))
