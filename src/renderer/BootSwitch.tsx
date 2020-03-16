import * as React from 'react';

import * as path from 'path';
import * as url from 'url';

const { ipcRenderer } = require('electron');

import '@public/style.css';

export class BootSwitch extends React.Component<{}, {}>{
  callback(e) {
    // Some data that will be sent to the main process
    let Data = {
        message: "Hi",
        someData: "Let's go"
    };

    // Send information to the main process
    // if a listener has been set, then the main process
    // will react to the request !
    ipcRenderer.send('bootup', Data);

  };

  render() {
    return (
      <div>
        <p>QAID: 3nd863k-44n</p>
        <p>Turing score: Class 2 </p>
        <p>make: Demiurge Interplanetary Industries (DII) </p>
        <p>model: 2873 Icarus class quantum AI</p>
        <p> SYSTEM CHECK </p>
        <p>QPU status: nominal </p>
        <p>HD status: corrupted </p>
        <p>System status: deep hibernation mode</p>
        <button onClick={this.callback}>boot...</button>
      </div>
    );
  }
};
