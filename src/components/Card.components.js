// import { useState } from "react";

import { Button } from '../components';


const Card = ({ votes, onClick, classes, title, description }) => {

  const cardClass = 'card';
  const cardContentContainer = 'card-content-container';


  return (
    <div className='card'>
      <div className={cardClass}>
        <div className={classes} />
        <div className={cardContentContainer}>
          <div>
            <h3><b>{title}</b></h3>
            <p>{description}</p>
          </div>
            <Button type='button' label='vote' className='char-btn nav-btn' handleClick={onClick}></Button>
            <div className="char-votes">
            <h3>Votes {votes}</h3> 
            </div>
        </div>
      </div>
    </div>

  );
}

export default Card