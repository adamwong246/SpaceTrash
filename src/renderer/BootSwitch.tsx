import * as React from 'react';
import '@public/style.css';


export class BootSwitch extends React.Component<{},{}>{
  render(){
    return (
      <div>
        <p>QAID: 3nd863k-44n</p>
        <p>Turing score: Class 2 </p>
        <p>make: Demiurge Interplanetary Industries (DII) </p>
        <p>model: 2873 Icarus class quantum AI</p>
        <p> SYSTEM CHECK </p>
        <p>QPU status: nominal </p>
        <p>HD status: corrupted </p>
        <p>Status: deep hibernation mode</p>
        <button>boot </button>
      </div>
    );
  }
}

