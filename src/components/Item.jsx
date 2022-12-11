import {Button, Card} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';

const Item = ({
  id,
  title,
  category,
  shortDescription,
  price,
  img500,
  img700,
  cookingTime,
  cookingDifficulty,
  nVCalories,
  servings,
}) => {
  const customStyle = {
    backgroundColor: '',
  };

  if (category === 'Keto') {
    customStyle.backgroundColor = '#f75f48';
  } else if (category === 'Light') {
    customStyle.backgroundColor = '#a1d168';
  } else if (category === 'Vegetariano') {
    customStyle.backgroundColor = '#f79432';
  } else if (category === 'Vegano') {
    customStyle.backgroundColor = '#4f8206';
  } else if (category === 'Sin Gluten') {
    customStyle.backgroundColor = '#ffd500';
  } else {
    customStyle.backgroundColor = '#fe54ac';
  }

  return (
    <Card className='card'>
      <div className='figure'>
        <Card.Img variant='top' src={img500} className='card--image' />
        <Card.Text
          className='card--tag position-absolute bottom-0 star-0'
          style={customStyle}>
          {category}
        </Card.Text>
        <Button className='btn-favourite top-0 end-0 shadow-none border-0'>
          <FontAwesomeIcon icon={faHeart} size='xl' />
          <span className='visually-hidden'>Agregar a Favoritos</span>
        </Button>
      </div>
      <Card.Body className='pt-0 position-relative'>
        <Card.Title className='card--header'>{title}</Card.Title>
        <Card.Text className='card--text'>
          <small>{shortDescription}</small>
        </Card.Text>
        <Card.Text className='card--text__subtxt mb-2 text-muted position-absolute bottom-0 start-50 translate-middle-x d-flex p-2 text-center'>
          <span className='fw-bold'>{cookingTime}</span>
          {'min  |  '}
          {' ' + cookingDifficulty}
          {'  |  '}
          {servings}
          {' porciones'}
          {'  |  '}
          {nVCalories}
        </Card.Text>
      </Card.Body>

      <Link
        to={`/item/${id}`}
        className='card--button shadow-0'
        style={customStyle}>
        <Button size='lg' className='card--button shadow-0' style={customStyle}>
          Ver más
        </Button>
      </Link>
    </Card>
  );
};

export default Item;
