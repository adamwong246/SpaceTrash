/**
 * React renderer.
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { BootSwitch } from './BootSwitch'

ReactDOM.render(<div> HELLO REACT</div>, document.getElementById('app'));

document.write("node", process.versions.node)
document.write("chrome", process.versions.chrome)
document.write("electron", process.versions.electron)
