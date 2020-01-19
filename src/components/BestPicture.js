import React from 'react';
import { Card, SubCard } from './Card';
import { resources } from '../constants';

const BASE_URL = 'http://127.0.0.1:8000'



export class BestPicture extends React.Component {
  constructor(props) {
    super(props);
    this.state = { api: {polls: [], nominations: []} };
  }

  fetchBestPicture = () => {
    fetch(`${BASE_URL}/polls/poll-best-picture?format=json`)
      .then(e => e.json())
      .then(e => {
        // console.log(e);
        this.setState({ api: e });
      })
      .catch(err => {
        this.setState({err: err})
      console.error(err)
    })
  }

  postBestPicture = (itemName) => {
    return fetch(`${BASE_URL}/polls/poll-best-picture?format=json`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token: '', category: 'Best Picture', choice: itemName })
      })
      .then(e => console.log(e))
      .catch(err => console.error(err));
  }

  componentDidMount() {
    this.fetchBestPicture();
  }

  getVotes = (name) => {
    const vote = this.state.api.polls.filter(e => e.item.name === name);
    if (vote.length > 0) {
      return vote[0].vote;
    }
    return null;
  }

  postVote = (category, itemName) => {
    console.log('Best Picture', itemName)
    this.postBestPicture(itemName).then(data => this.fetchBestPicture());
    // this.fetchBestPicture();
  }
  render() {
    return (
      <div className="container">
        <h3 className='title is-large'>Best Picture</h3>
        <br />
        {/* <div className="columns is-mobile"> */}
        {this.state.api.nominations.map(e => {
          const url = resources[e.name];
          return (
            <div className='column'>
              <SubCard voteAction={this.postVote} className='category' url={url} name={e.name} details={e.details} vote={this.getVotes(e.name) }/>
            </div>)
        })
        }
          </div>
      // </div>
    )
  }
}