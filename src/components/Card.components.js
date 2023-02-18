import { useState } from "react";

import { Button } from '../components';


const Card = ({ classes, title, description }) => {

  const cardClass = 'card';
  const cardContentContainer = 'card-content-container';
  const [count, setCount] = useState(0);
  const countVotes = () => {
    setCount((prevCount) => ++prevCount);
  }

  return (
    <div className='card'>
      <div className={cardClass}>
        <div className={classes} />
        <div className={cardContentContainer}>
          <div>
            <h3><b>{title}</b></h3>
            <p>{description}</p>
          </div>
            <Button type='button' label='vote' className='char-btn nav-btn' handleClick={countVotes}></Button>
            <div className="char-votes">
            <h3>Votes {count}</h3> 
            </div>
        </div>
      </div>
    </div>

  );
}

export default Card