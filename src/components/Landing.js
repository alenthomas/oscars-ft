import React from 'react';
import {Link} from "react-router-dom";

import { Card as Progress } from './Card';

export class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = { api: {}, err: null };
  }
  // componentDidMount() {
  //   fetch(`/polls/poll-best-picture?format=json`)
  //     .then(e => e.json())
  //     .then(e => {
  //       console.log(e);
  //       this.setState({ api: e });
  //     })
  //     .catch(err => {
  //       this.setState({err: err})
  //     console.error(err)
  //   })
  // }

  select = (name) => {
    console.log(`in ${name}`)
  }

  render() {
    return (
      <div className="container">
        <h3 className='title is-large'>Oscars 2020</h3>
        <div className="columns">
          <div className="column">
            <Link to="/best-picture">
              <Progress name='Best Picture' className='category' onClick={() => this.select('Best Picture')}/>
            </Link>
          </div>
          <div className="column">
            <Link to="/best-actress-leading">
              <Progress name='Best Actress Leading' className='category' onClick={() => this.select('Best Actress Leading')} />
            </Link>
          </div>
          <div className="column">
            <Link to="/best-actror-leading">
              <Progress name='Best Actor Leading' className='category' onClick={() => this.select('Best Actor Leading')} />
            </Link>
          </div>
          <div className="column">
            <Link to="/best-actress-supporting">
              <Progress name='Best Actress Supporting' className='category' onClick={() => this.select('Best Actress Supporting')} />
            </Link>
          </div>
        </div>
      </div>
    )
  }
}