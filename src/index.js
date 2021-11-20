import React from 'react';
import ReactDOM from 'react-dom';

import Keypad from './components/Keypad';
import EyesOnMe from './components/EyesOnMe';
import St from "./components/Street"

ReactDOM.render(
  <div>
    <Keypad />
    <EyesOnMe />
    <St />
  </div>,
  document.getElementById('root')
);
