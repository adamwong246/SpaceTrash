/**
 * React renderer.
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { BootSwitch } from './BootSwitch'

// Import the styles here to process them with webpack
import '@public/style.css';

ReactDOM.render(
  <div className='app'>
    <BootSwitch />
  </div>,
  document.getElementById('app')
);
