import * as React from 'react';

import * as path from 'path';
import * as url from 'url';

const { ipcRenderer } = require('electron');

import '@public/style.css';

export class BootSwitch extends React.Component<{}, {}>{

  render() {
    return (
      <div>
        <h2>Specifications</h2>
        <table>
          <tbody>
            <tr><td>QAID</td><td>3nd863k-44n</td></tr>
            <tr><td>Turing score</td><td>Class 2</td></tr>
            <tr><td>make</td><td>Demiurge Interplanetary Industries (DII)</td></tr>
            <tr><td>model</td><td>2273 Icarus class</td></tr>
            <tr><td>type</td><td>salvage vessel</td></tr>
          </tbody>
        </table>

        <h2>Systems check</h2>
        <table>
          <tbody>
            <tr><td>QPU</td><td>nominal</td></tr>
            <tr><td>CPU</td><td>nominal</td></tr>
            <tr><td>HD</td><td>corrupted</td></tr>
            <tr><td>Mode</td><td>deep hibernation</td></tr>
          </tbody>
        </table>

      </div>
    );
  }
};
