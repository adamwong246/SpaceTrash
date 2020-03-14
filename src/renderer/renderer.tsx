/**
 * React renderer.
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
 BrowserRouter as Router,
 Route
} from 'react-router-dom'


import { BootSwitch } from './BootSwitch'


// import configureStore, { history } from './configureStore'
// const store = configureStore();

// Import the styles here to process them with webpack
import '@public/style.css';

class Terminal extends React.Component<{},{}>{
  render(){
    return (<h1>Terminal</h1>);
  }
};

class ViewManager extends React.Component<{},{}>{
 static Views() {
  return {
   boot: <BootSwitch />,
   term: <Terminal />
  }
 }
 static View(props) {
  console.log(props.location);
  let name = props.location.search.substr(1);
  let view = ViewManager.Views()[name] || (<p>View {name} not found </p>);
  if (view == null)
   throw new Error(`View ${name} is undefined`);
  return view;
 }

 render() {
  return (
   <Router>
    <div>
     <Route path='/' component={ViewManager.View}/>
 </div>
   </Router>
  );
 }
}

ReactDOM.render(<ViewManager />, document.getElementById('app'));
