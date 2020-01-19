import React from 'react';

export function Card(props) {
  const { progress = 0, name = 'year', className = '' } = props;
  return (
    <div className={`block box ${className}`} onClick={props.onClick}>
      <div className='content is-medium'>
        {`${name.charAt(0).toUpperCase() + name.slice(1)}`}
      </div>
      <div>
        {props.children}
      </div>
    </div>
  )
}

export function SubCard(props) {
  return (
    <div className={`block box ${props.className}`}>
      <article class="media">
        <figure class="media-left">
          <p class="image is-128x128">
            <img src={props.url} alt={props.name}/>
          </p>
        </figure>
        <div class="media-content">
          <div class="content">
            <p><strong>{props.name}</strong></p>
            <div className='content'>
              <p>
                Film Synopsis: <br />{props.details}
              </p>
            </div>
          </div>
          <div>Votes: <strong>{props.vote}</strong></div>
        </div>
      </article>
      <div className='action'><button onClick={() => props.voteAction(props.className, props.name)} className='button is-primary'>Vote</button></div>
    </div>
  )
}