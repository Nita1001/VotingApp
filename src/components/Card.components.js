
import { Button } from '../components';


const Card = ({images, title, description}) => {

  const cardClass = 'card';
  const cardContainer = 'card-container';
  const thisRef = '#';
  
  return (

    <div className={cardClass}>
      <div className={images} />
      <div className={cardContainer}>
        <h3><b>{title}</b></h3>
        <p>{description}</p>
        <p>
          <Button type='button' label='vote' className='nav-btn'></Button>
        </p>
      </div>
    </div>

  );
}

export default Card