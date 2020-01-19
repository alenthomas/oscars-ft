import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Landing } from './components/Landing';
import { BestPicture } from './components/BestPicture';


import './App.scss';



function Progress(props) {
  const { progress = 0, name = 'year', className = '' } = props;
  return (
    <div className={`block box ${className}`} onClick={props.onClick}>
      <div className='content is-medium'>
        {`${name.charAt(0).toUpperCase() + name.slice(1)}`}
      </div>
      <progress className="progress is-primary" value={`${progress}`} max="100">{`${progress}%`}</progress>
      <div>
        {props.children}
      </div>
    </div>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { api: {}, err: null };
  }


  select = (name) => {
    console.log(`in ${name}`)
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/" exact={true}>
              <Landing />
            </Route>
            <Route path="/best-picture" exact={true}>
              <BestPicture />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
